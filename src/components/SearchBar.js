import React from 'react'

const SearchBar = props => { //parameteritu props > property
    return(
        <div style={styles.contentSearch}>
            <input type="text" 
            style={styles.inputSearch}
            placeholder="Search here..."
            onChange={props.onChangeSearch}
            />
        </div>
    )
}

const styles = {
    inputSearch:{
        flex: 1,
        height: 30,
        paddingLeft: 10,
        borderRadius: 50,
        border: "1px #e0e0e0 solid"
    },
    contentSearch:{
        
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
    }
}

export default SearchBar