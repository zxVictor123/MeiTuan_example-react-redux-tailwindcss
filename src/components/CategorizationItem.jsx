const CategorizatonItem = (props) => {
    const {name} = props
    return (
        <button className="px-1 py-6 text-gray-600 text-sm sm:text-lg md:text-lg lg:text-xl">{name}</button>
    )
}
export default CategorizatonItem