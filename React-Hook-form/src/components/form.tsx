
import { useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';


const Form = () => {

  // register - used to connect input fields to the form 
  // handleSubmit - it is a function to handle form submission
  // errors - contains validation errors for the form.
   
  interface FormData   //typescript
  {
    firstName : string;
    lastName : string;
    email : string;
    city : string;
    state : string;
    zip : string;
    country : string;     
  }

  const onSubmit:SubmitHandler<FormData>= (data) =>
  {
    console.log(data)
  }
  const { register,handleSubmit,formState:{errors} } = useForm<FormData>()
  return (
    <div>
      <div>React Hook Forms</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="firstName">
          <label htmlFor="name">First Name :</label>
            <input type="text" {...register('firstName',{required:'First name should be required'} )}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div className="lastName">
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" {...register('lastName', {required:'Last name is required'})} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div className="email">

            <label htmlFor="email">Email</label>
            <input type="text" {...register('email', {required : 'Email is required'})} />
            {errors.email && <p>{errors.email.message}</p>}

        </div>

        <div className="city">
          <label htmlFor="city">City</label>
          <input type="text" {...register('city', {required : 'city is required'})} />
          {errors.city && <p>{errors.city.message}</p>}
        </div>

        <div className="state">
          <label htmlFor="State">State</label>
          <input type="text" {...register('state', {required : 'state is required'})} />
          {errors.state && <p>{errors.state.message}</p>}
        </div>
        
        <div className="zip">
          <label htmlFor="zip">ZIP</label>
          <input type="zip" {...register('zip', {required : 'zip is required'})} />
          {errors.zip && <p>{errors.zip.message}</p>}
        </div>

        <div className="country">
          <label htmlFor="country">Country</label>
          <input type="text" {...register('country', {required : 'country is required'})} />
          {errors.country && <p style={{color:'red'}}>{errors.country.message}</p>}
        </div>
        <button type='submit'> Submit </button>
      </form>
    </div>
  );
}

export default Form;
