import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [victim, setVictim] = useState('victim');
    const [body, setBody] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [file, setFile] = useState('');
    const [type, setType] = useState('accident');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, victim, type, phone, email, date, file };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false);
            // history.go(1);
            history.push('/');
        });
    }

    return ( 
        <div className="create">
            <h2>Create a report</h2>
            <form onSubmit={handleSubmit}>
                <label>I am <span style={{color : "red"}}>*</span></label>
                <select
                 name={victim}
                 onChange={(e) => setVictim(e.target.value)}
                 >
                    <option value="victim">Victim</option>
                    <option value="bystander">Bystander</option>
                </select>
                <label>Title <span style={{color : "red"}}>*</span></label>
                <input 
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Name <span style={{color : "red"}}>*</span></label>
                <input 
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <label>Contact by <span style={{color : "red"}}>*</span></label>
                <input 
                  type="text"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                  type="tel"
                  pattern="[0-9]{4}[0-9]{3}[0-9]{4}" 
                  required
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label>Body <span style={{color : "red"}}>*</span></label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Type <span style={{color : "red"}}>*</span></label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                    <option value="accident">Accident</option>
                    <option value="fighting">Fighting</option>
                    <option value="rioting">Rioting</option>
                    <option value="other">Other</option>
                </select>
                <label>Incident Date and Time <span style={{color : "red"}}>*</span></label>
                <input
                 type="datetime-local"
                 required
                 value={date}
                 onChange={(e) => setDate(e.target.value)}
                />
                <label>Add additional file</label>
                <input
                 type="file"
                 placeholder="Upload"
                 value={file}
                 onChange={(e) => setFile(e.target.value)} 
                />
                {!isPending && <button>Add Report</button>}
                {isPending && <button disabled>Adding Report...</button>}
            </form>
        </div>
     );
}
 
export default Create;