import './LandingPage.css' ;

export default function LandingPage() {
  return (
    <div className='container col-12 d-flex justify-content-center gap-3 pt-5'>
       <div className="col col-md-6 content ps-2">
          <p className='pb-5'>One-click solution for your static website.</p>
          <p className='pb-5'>Image from <span>Freebik</span></p>
          <div className='d-flex align-items-center gap-2'>
            <button className='btn d-flex align-items-center'>
            <i class="fa-solid fa-arrow-up-from-bracket"></i>Upload Free</button>
            <button className='btn d-flex align-items-center'>
            <i class="fa-brands fa-youtube"></i>Watch Video</button>
          </div>
       </div>
       <div className="col col-md-6 image">
         <img src={`https://assets.nicepagecdn.com/d2cc3eaa/522058/images/xcc-min.png`} alt="" />
       </div>
    </div>
  )
}
