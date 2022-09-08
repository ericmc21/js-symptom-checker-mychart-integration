/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

import FHIR from 'fhirclient';

const myApp = {};

function convertDateToAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

async function getEpicPatientInfo() {
  const obs = await fetch(`${myApp.smart.state.serverUrl}/Patient/${myApp.smart.patient.id}`, {
    headers: {
      Accept: 'application/json+fhir',
      Authorization: `Bearer ${myApp.smart.state.tokenResponse.access_token}`
    }
  }).then((data) => {
    return data;
  });

  const response = await obs.json();
  return response;
}


async function getEpicProblems() {
  const probz = await
  fetch(`${myApp.smart.state.serverUrl}/Condition?patient=${myApp.smart.patient.id}&category=problem-list-item`, {
    headers: {
      Accept: 'application/json+fhir',
      Authorization: `Bearer ${myApp.smart.state.tokenResponse.access_token}`
    }
  }).then((data) => {
    return data;
  });

  const problems = await probz.json();
  return problems;
}


export default class EpicFhirClient {
  constructor() {
    this.message = 'my message';
    this.age = 48;
    this.sex = 'male';
  }

  getRiskFactors(message) {
    FHIR.oauth2.ready()
      .then((client) => {
        myApp.smart = client;
        getEpicPatientInfo()
          .then((res) => {
            this.setAge(convertDateToAge(res.birthDate));
            this.setSex(res.gender);
            console.log(this.age);
            console.log(res);
            return res;
          });
        getEpicProblems()
          .then((res) => {
            console.log(res);
            return res;
          });
        return null;
      });
    this.message = message;
  }

  getSex() {
    return this.sex;
  }

  getAge() {
    return this.age;
  }

  setSex(sex) {
    this.sex = sex;
  }

  setAge(age) {
    this.age = age;
  }
}
