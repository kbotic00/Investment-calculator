export default function UserInput({onChange,userInput}){
    
    return (
    <section id="user-input">
        <div className="input-group">
            <div>
                <label>Initial investment</label>
                <input type="number" required value={userInput.initialInvestment} onChange={(event)=>{onChange('initialInvestment',event.target.value)}}></input> 
            </div>
            <div>
                <label>Annual investment</label>
                <input type="number" required value={userInput.annualInvestment} onChange={(event)=>{onChange('annualInvestment',event.target.value)}}></input>  
            </div>
        </div>
        <div className="input-group">
            <div>
                <label>Expected return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(event)=>{onChange('expectedReturn',event.target.value)}} ></input>
            </div>
            <div>
                <label>Duration</label>
                <input type="number" required value={userInput.duration} onChange={(event)=>{onChange('duration',event.target.value)}}></input>
            </div>
        </div>    
    </section>
    );
        
}