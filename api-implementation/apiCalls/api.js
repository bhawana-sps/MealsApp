import { BASE_URL, GET_ALL_RECEPIES } from "../../util/contants";

export async function getRecepiListApi(){
  try {
    const respose = await fetch(BASE_URL + GET_ALL_RECEPIES);
    const json = await respose.json();
    return json.recipes;
  } catch (error) {
    console.error(error);
  }
}

export async function getRecepiDetailApi(id){
  try {
    console.log(BASE_URL + GET_ALL_RECEPIES+`/${id}`)
    const respose = await fetch(`${BASE_URL}${GET_ALL_RECEPIES}/${id}`);
    if (!respose.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await respose.json();
    return json;
  } catch (error) {
    console.error(error);
  }
}