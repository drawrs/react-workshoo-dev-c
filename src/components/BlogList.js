import React from 'react'

const BlogList = props => {
    return (
        <div style={styles.itemList}>
            <h2 style={styles.title}>{props.title}</h2>
            <div style={styles.seperator}></div>
            <p style={styles.meta}><i>By :</i> {props.author} - {props.date}</p>
            <p style={styles.description}>{props.content}</p>
        </div>
    )
}

const styles = {
    itemList:{
        borderBottom: "1px solid #e0e0e0",
        
    },
    title: {
        fontFamily: "sans-serif",
        fontWeight: "normal",
        color: "#333"
    },
    description: {
        color: "#333",
        fontSize: 16,
    },
    seperator:{
        // width: 60,
        // height: 4,
        // backgroundColor: "#444",
        // marginTop: -10
    },
    meta:{
        fontSize: 14,
        color: "#848181"
    }
}
export default BlogList