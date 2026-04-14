import Image from "next/image";


function Card({person}){
  return(
    <div className="h-fit flex flex-col items-center gap-2 p-2 rounded-xs shadow-md">
      <figure className="relative w-25 h-25">
        <Image src={person.picture} alt="Image of a man" fill className="object-cover rounded-full shadow-md"/>
      </figure>
      <h1 className="font-bold text-xl">
        {person.name}
      </h1>
      <div className="flex items-center gap-2 font-semibold">
        <p className="w-fit bg-slate-100 px-2 py-1 rounded-xs shadow-md">
          {`${person.days_since_contact}d ago`.toUpperCase()}
        </p>
        <div className="w-fit px-2 py-1 rounded-xs bg-slate-200 text-green-900 shadow-md">
          {person.tags.toUpperCase()}
        </div>
        <div className={`w-fit px-2 py-1 rounded-xs shadow-md text-white ${person.status==="almost due"?`bg-yellow-300`:null} ${person.status==="overdue"?`bg-red-400`:null} ${person.status==="on-track"?`bg-green-700`:null}`}>
          {person.status.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default Card;