import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {

    const {name, quantity, price, taste, supplier, photo, details} = useLoaderData();

    const handleUpdateCoffee = e =>{
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updateCoffee = Object.fromEntries(formData.entries())
        console.log(updateCoffee);

    }
    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Update Coffe </h1>

            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">                       
                        <label className="label">Name</label>
                        <input type="text"  name='name' defaultValue={name}
                         className="input w-full" placeholder="Coffee name" />                       
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">                       
                        <label className="label">Quantity</label>
                        <input type="text"  name='quantity' 
                        defaultValue={quantity}
                        className="input w-full" placeholder="Quantity name" />                       
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">                       
                        <label className="label">Supplier</label>
                        <input type="text"  name='supplier'
                        defaultValue={supplier}
                        className="input w-full" placeholder="Supplier name" />                       
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">                       
                        <label className="label">Taste</label>
                        <input type="text"  name='taste'
                        defaultValue={taste}
                        className="input w-full" placeholder="Taste name" />                       
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">                       
                        <label className="label">Price</label>
                        <input type="text"  name='price' 
                        defaultValue={price}
                        className="input w-full" placeholder="Price per cup" />                       
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">                       
                        <label className="label">Details</label>
                        <input type="text"  name='details'
                        defaultValue={details}
                        className="input w-full" placeholder="Details name" />                       
                    </fieldset>
                   
                </div>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border my-6 p-4">                       
                        <label className="label">Photo</label>
                        <input type="text"  name='photo'
                        defaultValue={photo}
                        className="input w-full" placeholder="Photo URL" />                       
                    </fieldset>

                    <input type="submit" className='btn w-full' value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;