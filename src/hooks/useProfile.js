import useFetch from "./useFetch";
import axiosAuthInstance from "../Api/axiosAuthInstance";
import i18n from "../i18n";


export default function useProfile(){

return useFetch(['profile', i18n.language], '/Profile',{}, axiosAuthInstance)
}