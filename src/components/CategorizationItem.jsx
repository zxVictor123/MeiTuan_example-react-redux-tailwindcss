const CategorizatonItem = (props) => {
    const {name} = props
    return (
        <button className="p-1 text-sm sm:text-lg md:text-lg lg:text-xl">{name}</button>
    )
}
export default CategorizatonItem