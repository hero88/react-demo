
export default function Uncontrolled() {
    const handleSubmit = (e) => {
        console.log("Name value: " + window.fullname.value);
        console.log("Email value: " + window.email.value);
        e.preventDefault();
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type='text' name='fullname' id='fullname'/> <br/><br/>
                <input type='text' name='email' id='email'/> <br/><br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}