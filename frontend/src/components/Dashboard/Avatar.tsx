function Avatar({name}:{name:string}){
    return(
        <div className="relative border-gray-500 border inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full">
             <span className="font-medium text-yellow-400 text-lg m-2">{name[0]}</span>
        </div>
    )
}

export default Avatar;