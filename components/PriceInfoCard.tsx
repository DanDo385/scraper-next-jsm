import Image from "next/image";

const PriceInfoCard = ( { title, iconSrc, value, borderColor }: Props) => {
  return (
   <>
   <div className = {`price-info_card border-1-[${borderColor}]`}>
        <p className='text-base text-black-100'>{title}</p>    
    </div>
    
    <div className="flex gap-1">
        <Image
            src={iconSrc}
            alt={title}
            width={24}
            height={24} 
        />
        <p className="text-2xl font-bold text-secondary">{value}</p>
    </div>
    </>
  )
}

export default PriceInfoCard;