import { AboutController } from "./controllers/AboutController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { CarsView } from "./views/CarsView.js";


export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <div class="card">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    // NOTE this is essentially the HTML 'template' that is draw to the about page but has been abstracted to its own file in the views folder
    view: AboutView
  },
  {
    path: '#/cars',
    // NOTE controller is the interface layer that we want the user to interact with 
    controller: CarsController,
    // NOTE view is what is injected to the HTML: what we see on the page
    view: CarsView

    // NOTE: this got abstracted to CarsView
    //   /*html*/`
    //   <div class="container-fluid">
    // <section class="row">
    //   <button class="btn btn-info col-1" data-bs-toggle="collapse" data-bs-target="#carFormCollapse">
    //     List Car! <i class="mdi mdi-car"></i>
    //   </button>

    //   <div class="collapse" id="carFormCollapse">

    //     <form class="row p-2" onsubmit="app.CarsController.createCar()">

    //       <div class="form-floating mb-3 col-4">
    //         <input required type="text" minLength="3" maxLength="15" class="form-control" id="carMake" name="make" placeholder="Car Make">
    //         <label for="carMake">Car Make</label>
    //       </div>

    //       <div class="form-floating mb-3 col-4">
    //         <input required type="text" class="form-control" id="carModel" name="model" placeholder="Car Model">
    //         <label for="carModel">Car Model</label>
    //       </div>

    //       <div class="form-floating mb-3 col-4">
    //         <input  required type="number" class="form-control" min="1950"  id="carYear" name="year" placeholder="Car Year">
    //         <label for="carYear">Car Year</label>
    //       </div>

    //       <div class="form-floating mb-3 col-6">
    //         <input  required type="number" class="form-control" max="10000000" id="carPrice" name="price" placeholder="Car Price">
    //         <label for="carPrice">Car Price</label>
    //       </div>

    //       <div class="form-floating mb-3 col-2">
    //         <input  required type="color" class="form-control" id="carColor" name="color" placeholder="Car Color">
    //         <label for="carColor">Car Color</label>
    //       </div>

    //       <div class="form-check col-4">
    //         <input  class="form-check-input" type="checkbox" id="isNew" name="isNew">
    //         <label class="form-check-label" for="isNew">
    //           Is this a new car?
    //         </label>
    //       </div>

    //       <div class="form-floating mb-3 col-12">
    //         <input  required type="text" class="form-control" id="carimgUrl" name="imgUrl" placeholder="Car imgUrl">
    //         <label for="carimgUrl">Car Image Url</label>
    //       </div>

    //       <div class="form-floating">
    //         <textarea  required maxLength="144" class="form-control" placeholder="Please describe your car" name="description" id="carDescription"
    //           style="height: 100px"></textarea>
    //         <label for="carDescription">Car Description</label>
    //       </div>

    //       <!-- NOTE make sure that your submit button is INSIDE of your form tag -->
    //       <div class="text-end">
    //         <button type="submit" class="btn btn-info">Create Listing</button>

    //       </div>
    //     </form>
    //   </div>
    // </section>

    //   <section class="row justify-content-center" id="cars">
    //     <!-- STUB car template -->
    //     <!-- <div class="col-md-10 elevation-5 rounded-top">
    //       <div class="row">
    //         <div class="col-4 p-0">
    //           <img class="img-fluid rounded-start"
    //             src="https://bringatrailer.com/wp-content/uploads/2020/05/2011_bmw_335_15901301926d884f6124Photo-May-03-1-45-59-PM.jpg?fit=940%2C627"
    //             alt="make model">
    //         </div>
    //         <div class="col-8">
    //           <h2 class="text-center">Year Make Model</h2>
    //           <div class="d-flex justify-content-around pt-3">
    //             <span>$Price</span>
    //             <span>Date</span>
    //           </div>
    //           <p>Description</p>
    //         </div>
    //       </div>
    //     </div> -->

    //   </section>


    //   </div>`
  },

  // TODO for the students: start here for houses page
  {
    path: '#/houses',
    controller: HousesController,
    view: /*html*/ `
<button class="btn btn-info col-1" data-bs-toggle="collapse" data-bs-target="#houseFormCollapse">
       List House!
       </button>

<div class = "collapse" id= "houseFormCollapse">

<section class="row justify-content-between">
<form action="">
  <div class="row d-flex justify-content-around">
          <div class="col-3">
            <input required name='house' maxLength="20"
              type="text"
              class="form-control"
              placeholder="Name of House"
              aria-label="Name of House"
              />
          </div>
          <div class="col-2">
            <input required name='year' min='1800' max='2025'
              type="number"
              class="form-control"
              placeholder="Year"
              aria-label="year"
            />
          </div>

          <div class="col-2">
            <input required name='bedrooms' min='1'max='15'
              type="number"
              class="form-control"
              placeholder="Number of Bedrooms"
              aria-label="Number of Bedrooms"
            />
          </div>
          <div class="col-3">
            <input required name='bathroom' min='1'max='15'
              type="number"
              class="form-control"
              placeholder="Number of Bathrooms"
              aria-label="Number of Bathrooms"
              />
          </div>
          <div class="col-3">
            <input required name='price' max='2000000'
            type="number"
              class="form-control"
              placeholder="Price"
              aria-label="price"
            />
          </div>
          <div class="col-5">
            <input required name='sqft' max='2000000'
            type="number"
              class="form-control"
              placeholder="SqFt?"
              aria-label="sqft"
            />
          </div>
          <div class="col-8">
            <div class="form-floating">
              <textarea required name='description' maxLength='200'
              class="form-control"
              placeholder="Description"
                id="floatingTextarea2"
                style="height: 100px"
              ></textarea>
              <label for="floatingTextarea2">Description</label>
              </div>
          
          </div>
          <div class="col-5">
            <input required name='imgUrl'
            type="text"
              class="form-control"
              placeholder="Image Here"
              aria-label="img"
            /div>
          <div class = "text-end" type = "submit">
          <button class = "bg-success">Submit!</button>
          </div>
          </div>
      </form>
      </section>
      </div>
    
    
    <section class = "row justify-content-center elevation rounded" id = 'houses'>
    <div class="col-md-10 elevation">
        <div class="row">
        <div class="col-8">
        <h2 class="text-center">year name</h2>
        <div>
        <span>date</span>
        <span>sqft</span>
        <span>bedrooms bathrooms</span>
        <span>$$</span>
        </div>
        <p>description</p>
        </div>
        <div class="col-4">
        <img src="" alt="house" />
        </div>
        </div>
        </div>
        </section>`
  }
]