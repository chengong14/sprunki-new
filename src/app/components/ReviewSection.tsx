'use client';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebook, FaReddit, FaHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';

interface Review {
  id: string;
  text: string;
  likes: number;
  date: string;
  author: string;
  hasLiked: boolean;
}

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState('');
  const [author, setAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hashtags = [
    'sprunki new version',
    'rejecz in sprunki',
    'sprunki phase',
    'incredibox sprunki mod',
    'sprunki incredibox scratch'
  ];
  
  // Load reviews from localStorage on component mount
  useEffect(() => {
    const savedReviews = localStorage.getItem('sprunkiReviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      // Initial reviews
      const initialReviews: Review[] = [
        {
          id: '1',
          text: "I find myself smiling every time I play, as it brings such a simple yet profound sense of joy.",
          likes: 42,
          date: '2025-01-05',
          author: 'Lol_Chanz',
          hasLiked: false
        },
        {
          id: '2',
          text: "I always feel recharged and happy after playing. It's a game that truly brings out the best in me.",
          likes: 38,
          date: '2024-01-09',
          author: 'mimitoysasmr1',
          hasLiked: false
        }
      ];
      setReviews(initialReviews);
      localStorage.setItem('sprunkiReviews', JSON.stringify(initialReviews));
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.trim() || !author.trim() || isSubmitting) return;

    setIsSubmitting(true);

    const newReviewObj: Review = {
      id: Date.now().toString(),
      text: newReview.trim(),
      likes: 0,
      date: new Date().toISOString().split('T')[0],
      author: author.trim(),
      hasLiked: false
    };

    const updatedReviews = [newReviewObj, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('sprunkiReviews', JSON.stringify(updatedReviews));
    
    setNewReview('');
    setAuthor('');
    setIsSubmitting(false);
  };

  const handleLike = (reviewId: string) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId) {
        return {
          ...review,
          likes: review.hasLiked ? review.likes - 1 : review.likes + 1,
          hasLiked: !review.hasLiked
        };
      }
      return review;
    });
    setReviews(updatedReviews);
    localStorage.setItem('sprunkiReviews', JSON.stringify(updatedReviews));
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent('Check out this amazing game - Sprunki-Newest! 🎮 #SprunkiGame');

  return (
    <section id="reviews" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reviews Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Player Reviews
          </h2>
          <p className="text-gray-400 text-lg">
            Share your experience with the Sprunki community!
          </p>
        </motion.div>

        {/* Add Review Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <form onSubmit={handleSubmitReview} className="bg-gray-800 rounded-xl p-6">
            <div className="mb-4">
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
                maxLength={50}
              />
            </div>
            <div className="mb-4">
              <textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Share your thoughts about the game..."
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]"
                required
                maxLength={500}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 disabled:opacity-50"
            >
              Post Review
            </button>
          </form>
        </motion.div>

        {/* Reviews List */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-white font-medium">{review.author}</h3>
                  <p className="text-gray-400 text-sm">{review.date}</p>
                </div>
                <button
                  onClick={() => handleLike(review.id)}
                  className={`flex items-center space-x-2 transition-colors duration-300 ${
                    review.hasLiked ? 'text-pink-500' : 'text-gray-400 hover:text-pink-500'
                  }`}
                >
                  <FaHeart className={`w-5 h-5 ${review.hasLiked ? 'fill-current' : 'stroke-current'}`} />
                  <span>{review.likes}</span>
                </button>
              </div>
              <p className="text-gray-300">{review.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Sharing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Share Your Experience</h3>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaTwitter className="w-8 h-8" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-500 transition-colors"
            >
              <FaFacebook className="w-8 h-8" />
            </a>
            <a
              href={`https://reddit.com/submit?url=${shareUrl}&title=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-500 transition-colors"
            >
              <FaReddit className="w-8 h-8" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {hashtags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewSection; 