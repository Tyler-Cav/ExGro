export default function deleteButton() {
    const deleteMe = () => {
        // This must have to live in this component right? 
        // How do I create a function within this component that's telling the object created in the other component to remove itself at that array of objects?
        // Do I need to remap the array after removing it from the grocery list?
        console.log('at least this works')
    }
    return (
        <>
            <button
                onClick={deleteMe}
            >
                Delete
            </button >

        </>
    )
}