function Filter({ value, onChange }) {

    return (

        <select
            value={value}
            onChange={(e)=>onChange(e.target.value)}
        >

            <option value="">All</option>

            <option value="Placement">
                Placement
            </option>

            <option value="Result">
                Result
            </option>

            <option value="Event">
                Event
            </option>

        </select>

    );

}

export default Filter;