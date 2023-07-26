function DestructuredProps({name , age}) {
    return (
        <div>
            <p>My Name is :</p>
            <h1>{name}</h1>
            <p>and age is :</p>
            <h1>{age}</h1>
            <p></p>
        </div>
    );
}


// we can use the props in that way also;
export default  DestructuredProps;