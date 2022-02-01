const router = require('express').Router();
const { Reviews } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Reviews.findAll()
      .then(dbReviewsData => res.json(dbReviewsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// router.get('/', (req, res) => {
//     Reviews.findAll({
//         attributes: ['id', 'post_url', 'title', 'review', 'created_at'],
//         include: [
//           {
//             model: User,
//             attributes: ['username']
//           }
//         ]
//       })
//         .then(dbReviewsData => res.json(dbReviewsData))
//         .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });


router.post('/', withAuth, (req, res) => {
    if (req.session) {    
        Reviews.create({
            score: req.body.score,
            review_title: req.body.review_title,
            review_text: req.body.review_text,
            user_id: req.session.user_id,
            movies_id: req.body.movies_id
        })
        .then(dbReviewsData => res.json(dbReviewsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

router.delete('/:id', withAuth, (req, res) => {
    Reviews.destroy({
    where: {
        id: req.params.id
    }
    })
    .then(dbReviewsData => {
        if (!dbReviewsData) {
        res.status(404).json({ message: 'No review found with this id!' });
        return;
        }
        res.json(dbReviewsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;