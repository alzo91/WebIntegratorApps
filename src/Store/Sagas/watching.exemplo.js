import { call, put, select, delay } from "redux-saga/effects";
import axios from "axios";

import {
  updtMatricula,
  sendEmails,
  sendRegistry
} from "../Actions/fnMatriculas";

import confUrl from "../../AppConfs/URLs";

const settings = state => state.settings;
const matriculas = state => state.matriculas;

export function* watching() {
  console.tron.log("watching");
  while (true) {
    let registros = yield select(matriculas);
    //let { basicAuth } = yield select(settings);
    console.tron.log(`qtd de registros: ${registros.length}`);
    yield* registros.map(function*(obj) {
      if (obj.enviado !== 200 && obj.enviado !== 409) {
        yield put(sendRegistry(obj));
        yield delay(900);
      }
    });
    yield delay(30000);
  }
}

export function* sentRegistry(action) {
  console.tron.log(`### Interceptou o SENT_REGISTRY`);
  const { matricula, dataReg, base64, enviado, objLoc } = action.payload.obj;

  try {
    const { basicAuth, namespace } = yield select(settings);

    let objEnv = {
      employee: matricula,
      datetime: dataReg,
      picture: base64,
      longitude: objLoc ? objLoc.longitude : 0,
      latitude: objLoc ? objLoc.latitude : 0
    };

    const resp = yield call(axios.post, confUrl.strURIteste, objEnv, {
      headers: { Authorization: basicAuth }
    });

    if (resp.status === 200 || resp.status === 409) {
      //fnServices.enviarComprovante(configs.namespace, matricula, dataReg);
      yield put(sendEmails({ matricula, dthrpto: dataReg }));
    }

    if (enviado !== resp.status) {
      yield put(updtMatricula("0", matricula, dataReg, resp.status));
    }
  } catch (err) {
    console.tron.error(err);
    let [, sts] = err.message.split("code ");
    sts = !sts ? 500 : +sts;

    if (enviado != sts) {
      yield put(updtMatricula("0", matricula, dataReg, sts));
    }
  }
}

export function* sendVouchersRecord(action) {
  console.tron.log(`### Interceptou o COMPROVANTES`);
  const { matricula, dthrpto } = action.payload;
  const { namespace } = yield select(settings);
  try {
    let urlEnv = `${confUrl.strURIEnvEmail}`;
    urlEnv += `?namespace=${namespace}&matricula=${matricula}&dthrpto=${dthrpto}`;
    const resp = yield call(axios.get, urlEnv);
    console.tron.log(resp);
  } catch (err) {
    console.tron.warn(err);
  }
}

export function* addRegistry(action) {
  console.tron.log(`### Interceptou o ADD_MATRICULA`);
  const { matricula, dataReg, base64, enviado, objLoc } = action.payload;

  try {
    const { basicAuth, namespace } = yield select(settings);

    let objEnv = {
      employee: matricula,
      datetime: dataReg,
      picture: base64,
      longitude: objLoc ? objLoc.longitude : 0,
      latitude: objLoc ? objLoc.latitude : 0
    };

    const resp = yield call(axios.post, confUrl.strURIteste, objEnv, {
      headers: { Authorization: basicAuth }
    });

    if (resp.status === 200 || resp.status === 409) {
      //fnServices.enviarComprovante(configs.namespace, matricula, dataReg);
      yield put(sendEmails({ matricula, dthrpto: dataReg }));
    }

    if (enviado !== resp.status) {
      yield put(updtMatricula("0", matricula, dataReg, resp.status));
    }
  } catch (err) {
    console.tron.error(err);
    let [, sts] = err.message.split("code ");
    sts = !sts ? 500 : +sts;

    if (enviado !== sts) {
      yield put(updtMatricula("0", matricula, dataReg, sts));
    }
  }
}
