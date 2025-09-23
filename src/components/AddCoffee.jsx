import React from 'react';

const AddCoffee = () => {

    const handleAddCoffee = e =>{
        e.preventDefault();
        //const form = e.target;
    }


    return (
        <div className='p-24'>
            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">Add Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">                       
                        <label className="label">Name</label>
                        <input type="text"  name='name' className="input w-full" placeholder="Coffee name" />                       
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">                       
                        <label className="label">Chef</label>
                        <input type="text"  name='chef' className="input w-full" placeholder="Chef name" />                       
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">                       
                        <label className="label">Supplier</label>
                        <input type="text"  name='supplier' className="input w-full" placeholder="Supplier name" />                       
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">                       
                        <label className="label">Taste</label>
                        <input type="text"  name='taste' className="input w-full" placeholder="Taste name" />                       
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">                       
                        <label className="label">Category</label>
                        <input type="text"  name='category' className="input w-full" placeholder="Category name" />                       
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">                       
                        <label className="label">Details</label>
                        <input type="text"  name='details' className="input w-full" placeholder="Details name" />                       
                    </fieldset>
                   
                </div>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border my-6 p-4">                       
                        <label className="label">Photo</label>
                        <input type="text"  name='photo' className="input w-full" placeholder="Photo URL" />                       
                    </fieldset>

                    <input type="submit" className='btn w-full' value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;