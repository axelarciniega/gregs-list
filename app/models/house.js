




export class House {
    constructor(data) {
        this.id = data.id
        this.year = data.year
        this.name = data.name
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.listingDate = new Date()
    }

    get HouseTemplate(){
        return /**html */ `
        
<div class="col-md-10 elevation rounded" style = 'border:2px solid black'>
            <div class="row">
                 <div class="col-8">
                    <h2 class="text-center">${this.name} </h2>
                    <h2>Year:${this.year}</h2>
                </div>
            </div>
                <span>${this.listingDate.toLocaleDateString()}</span>
        
        <div>
        <span>${this.sqft}sqft</span>
        <div>
        <span>${this.bedrooms} bedrooms ${this.bathrooms} bathrooms</span>
        
        </div>
        <span>$${this.price}</span>

        </div>
            <div>
                <p>${this.description}</p>
            </div>
        <div class="col-4">
            <img src="${this.imgUrl}" alt="house" />
            
            </div>
        </div>
    </div>
        `
    }







}