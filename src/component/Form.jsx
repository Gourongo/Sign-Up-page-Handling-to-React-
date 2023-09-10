import React from "react";

class Form extends React.Component{
    state = {
        title: "",
        titleL: "",
        email: "",
        address: "",
        cPassword: "",
        password: "",
        libraries: "",
        course: "",
        checking: false,
        passwordMismatch: false,
    };

    handleForm = (e) => {
        const {name , value} = e.target;
        console.log(name);
        if(name === 'fName'){
            this.setState({
                title : value,
            });
        } else if(name === 'LName'){
            this.setState({
                titleL : value,
            });
        } else if(name === 'email'){
            this.setState({
                email : value,
            });
        } else if(name === 'address'){
            this.setState({
                address : value,
            });
        } else if(name === 'cPassword'){
            this.setState({
                cPassword : value,
                passwordMismatch: this.state.password !== value,
            });
        } else if(name === 'Password'){
            this.setState({
                password : value,
                passwordMismatch: this.state.cPassword !== value,
            });
        } else if(name === 'option'){
            this.setState({
                libraries : value,
            });
        } else if(name === 'course'){
            this.setState({
                course : value,
            });
        }  else if(name === 'checkbox'){
            this.setState({
                checking : e.target.checked,
            });
        } else{
            console.log(e.target.type);
            console.log('end');
        }
    };

    submitHandler = (e) => {
        const {title, titleL, email, address, password, libraries, course, checking, passwordMismatch } = this.state;
        e.preventDefault();
        if(passwordMismatch){
            alert("Password and Confirm Password do not match. Please check.");
        } else{
            console.log(title, titleL, email, address, password, libraries, course, checking);
        }
        
    }

    render() {
        const {title, titleL, email, address, cPassword, Password, libraries, course, checking,  passwordMismatch} = this.state;
        return(
            <>
                
                <form onSubmit={this.submitHandler}>
                    <div id="form-header">
                        <p>CO.</p>
                        <p>Already have an account ? <a href="">Sign in here</a></p>
                    </div>

                    <h3>Create An Account</h3>

                    <label htmlFor="First Name">First Name :</label>
                    <input type="text" name="fName" placeholder="Enter First Name" value={title} onChange={this.handleForm} required/>

                    <label htmlFor="Last Name">Last Name :</label>
                    <input type="text" name="LName" placeholder="Enter Last Name" value={titleL} onChange={this.handleForm} required/>
                    

                
                
                    <br/>
                    <br/>
                
                    <label htmlFor="Email">Email :</label>
                    <input type="email" name="email" placeholder="Enter Email Address" value={email} onChange={this.handleForm} required/>
                  

                 
                    <label htmlFor="Address">Address :</label>
                    <input type="text" name="address" placeholder="Enter Address" value={address} onChange={this.handleForm} required/>
                  
                    <br/>
                    <br/>

                 
                    <label htmlFor="Create Password">Create Password :</label>
                    <input type="password" name="cPassword" placeholder="********" value={cPassword} onChange={this.handleForm} required  />
                 

                 
                    <label htmlFor="Confirm Password">Confirm Password :</label>
                    <input type="Password" name="Password" placeholder="********" value={Password} onChange={this.handleForm} required style={{ borderColor: passwordMismatch ? 'red' : '' }} />
                   

                    <br/>
                    <br/>
                   
                    <label htmlFor="">Select Programming Languages : </label>
                    <select name="option" value={libraries} onChange={this.handleForm} required>
                        <option value="">Select Languages</option>
                        <option value="React">React</option>
                        <option value="React Native">React Native</option>
                        <option value="Angular">Angular</option>
                    </select>
                   

                   
                    <label htmlFor="">Select a Course : </label>
                    <select name="course" value={course} onChange={this.handleForm} required>
                        <option value="">Select Course</option>
                        <option value="3 Month">3 Month</option>
                        <option value="6 Month">6 Month</option>
                        <option value="1 Year">1 Year</option>
                    </select>
                    


                    <br/>
                    <br/>

                 
                    <input id="checkbox" type="checkbox" name="checkbox" checked= {checking} onChange={this.handleForm} />
                    <label htmlFor="terms & conditions">Creating your account and accepting <a href="#">Terms & Condition</a></label>
                  

                    <br/>
                    <br/>

                   
                    <input id="Submit" type="Submit" value="Submit" onChange={this.handleForm}/>
                    
                </form>
                    
            </>
        );
    }
}

export default Form