

function TrackingCard(){
  return(
    <div className="grid grid-cols-2 grid-row-2 gap-2 p-2 xl:grid-cols-4 xl:grid-rows-1 flex-none my-10">
      <div className="text-center p-4 rounded-xs shadow-md space-y-2">
        <h1 className="font-bold text-2xl xl:text-3xl text-green-900">12</h1>
        <p className="font-semibold text-slate-500">Total Friends</p>
      </div>
      <div className="text-center p-4 rounded-xs shadow-md space-y-2">
        <h1 className="font-bold text-2xl xl:text-3xl text-green-900">3</h1>
        <p className="font-semibold text-slate-500">On Track</p>
      </div>
      <div className="text-center p-4 rounded-xs shadow-md space-y-2">
        <h1 className="font-bold text-2xl xl:text-3xl text-green-900">6</h1>
        <p className="font-semibold text-slate-500">Need Attention</p>
      </div>
      <div className="text-center p-4 rounded-xs shadow-md space-y-2">
        <h1 className="font-bold text-2xl xl:text-3xl text-green-900">12</h1>
        <p className="font-semibold text-slate-500">Interactions This Month</p>
      </div>
    </div>
  )
}

export default TrackingCard;