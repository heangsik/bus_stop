import { parseStringPromise } from "xml2js";
export async function load() {
  const serviceKey = import.meta.env.VITE_BUS_API_KEY;
  const stationId = "224000956"; // 산현초
  const stationIdGate = "224000436"; // 산현초 정문
  console.log(serviceKey);

  const url =
    "http://apis.data.go.kr/6410000/busarrivalservice/getBusArrivalList";

  const getApiResult = async (url, serviceKey, stationId) => {
    const response = await fetch(
      `${url}?serviceKey=${serviceKey}&stationId=${stationId}`
    );
    return response;
  };

  const convertObjectToXml = async (text) => {
    const xmlDoc = await parseStringPromise(text);
    const busList = xmlDoc.response.msgBody[0].busArrivalList;
    return busList;
  };

  // 산현초
  const response = await getApiResult(url, serviceKey, stationId);
  console.log(response.status);
  const text = await response.text();
  const busListSchool = await convertObjectToXml(text);

  // 산현초 정문
  const responseGate = await getApiResult(url, serviceKey, stationIdGate);
  const textGate = await responseGate.text();
  const busListGate = await convertObjectToXml(textGate);

  //   busList.forEach((element) => {
  //     console.log(element);
  //   });

  console.log("_______________________________");
  return {
    school: busListSchool,
    schoolGate: busListGate,
  };
}
