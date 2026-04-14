import Card from "./card/card";
import dataContext from "@/context/dataContext";
import { useContext } from "react";

function CardContainer(){
  const{persons}=useContext(dataContext);
  return(
    <div className="flex-1 grid grid-cols-1 gap-2 p-2 rounded-xs md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {persons.map((person)=><Card key={person.id} person={person}/>)}
    </div>
  );
}

export default CardContainer;