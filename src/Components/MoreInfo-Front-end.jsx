import image from '../assets/Images/Image.png'
import comment from '../assets/Images/comments front-end.png'
import review from '../assets/Images/Front end individual review.png'
import BackToTopButton from './Back-to-top'



function MoreInfoFrontEnd () {
    return (
        <>
        <div className="image-text-container">
        <img  src={image} alt="My Image" className='image'/>
        <p>This is the home page from here you can view the amount of comments a board game has aswell as click on the name of a board game to navigate to a page displaying the information about that given board game.</p>
        </div>
        <div className='image-text-container'>
        <p>This is the page for a review for an individual board game here you can view information such as when this post was created and the author of the post you can also vote on this review and scroll down or press the button at the top of the page to view comments related to this review</p>
        <img  src={review} alt="My Image" className='image'/>
        </div>
        <div className='image-text-container'>
        <img  src={comment} alt="My Image" className='image'/>
        <p>These are the comments for an individual review here you can add a new comment as well as vote on comments left by other users</p>
        </div>
        <div className='image-text-container'>
          <p> There were some blockers for this project as it was the first time I had used axios to fetch data from an API and I was trying also trying to improve my CSS skills during this project. I am still working on the aspects of this project so expect more to be added in the near future </p>
        </div>
        <BackToTopButton/>
        </>
    )
}

export default MoreInfoFrontEnd