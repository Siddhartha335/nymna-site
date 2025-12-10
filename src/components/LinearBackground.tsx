const LinearBackground = ({children,className}:{
    children:React.ReactNode,
    className?:string
}) => {
  return (
    <div className={`w-full bg-[linear-gradient(104.92deg,_#B3D0F5_30.64%,_#57A5FF_72.12%,_#247BFF_99.78%)] flex flex-col ${className} `}>
        {children}
    </div>
  )
}

export default LinearBackground