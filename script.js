const reels = [
  {
    username: "ellie_styles",
    likeCount: 1200,
    isLiked: true,
    commentCount: 85,
    caption: "Minimal yet chic burkha look for exams ✨",
    video: "./video1.mp4",
    shareCount: 40,
    isFollowed: true,
    isMuted: true,
    userprofile: "https://i.pinimg.com/736x/df/c7/68/dfc7686278f27c89a680cb3746e61b5c.jpg"
  },
  {
    isMuted: true,
    username: "raj_travels", 
    likeCount: 980,
    isLiked: false,
    commentCount: 60,
    caption: "Sunset at Jaipur fort 🏰",
    video: "./video2.mp4",
    shareCount: 25,
    isFollowed: false,
    userprofile: "https://images.unsplash.com/photo-1774031826492-3d859b950574?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    isMuted: true,
    username: "tech_guru",
    likeCount: 1500,
    isLiked: true,
    commentCount: 120,
    caption: "Top 5 gadgets of 2026 🔥",
    video: "./video3.mp4",
    shareCount: 75,
    isFollowed: true,
    userprofile: "https://plus.unsplash.com/premium_photo-1774105407169-bcf3519bb0b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    isMuted: true,
    username: "foodie_diaries",
    likeCount: 2100,
    isLiked: true,
    commentCount: 200,
    caption: "Best street food in Delhi 🍲",
    video: "./video4.mp4",
    shareCount: 90,
    isFollowed: false,
    userprofile: "https://images.unsplash.com/photo-1773332585956-2d0e8ac80cb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D"
  },
  {
    isMuted: true,
    username: "fitness_freak",
    likeCount: 870,
    isLiked: false,
    commentCount: 45,
    caption: "Morning workout routine 💪",
    video: "./video5.mp4",
    shareCount: 30,
    isFollowed: true,
    userprofile: "https://images.unsplash.com/photo-1761839258420-5c3e2f2e2a74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    isMuted: true,
    username: "artsy_soul",
    likeCount: 1340,
    isLiked: true,
    commentCount: 110,
    caption: "Watercolor sunset painting 🌅",
    video: "./video6.mp4",
    shareCount: 55,
    isFollowed: false,
    userprofile: "https://images.unsplash.com/photo-1773751392399-241afcb9fac2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    isMuted: true,
    username: "music_vibes",
    likeCount: 2500,
    isLiked: true,
    commentCount: 300,
    caption: "Acoustic cover of a classic 🎶",
    video: "./video7.mp4",
    shareCount: 120,
    isFollowed: true,
    userprofile: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWN8ZW58MHx8MHx8fDA%3D"
  },
  {
    isMuted: true,
    username: "gaming_zone",
    likeCount: 1900,
    isLiked: false,
    commentCount: 150,
    caption: "Epic win in Battle Royale 🎮",
    video: "./video9.mp4",
    shareCount: 80,
    isFollowed: true,
    userprofile: "https://images.pexels.com/photos/5310634/pexels-photo-5310634.jpeg"
  },
  {
    isMuted: true,
    username: "style_corner",
    likeCount: 1100,
    isLiked: true,
    commentCount: 95,
    caption: "Accessorizing burkhas with chic wristwatches ⌚",
    video: "./video8.mp4",
    shareCount: 45,
    isFollowed: false,
    userprofile: "https://images.unsplash.com/file-1715651741414-859baba4300dimage?w=416&dpr=2&auto=format&fit=crop&q=60"
  },
  {
    isMuted: true,
    username: "nature_lens",
    likeCount: 1750,
    isLiked: true,
    commentCount: 130,
    caption: "Capturing the beauty of Gir forest 🌳",
    video: "./video10.mp4",
    shareCount: 70,
    isFollowed: true,
    userprofile: "https://images.pexels.com/photos/6216558/pexels-photo-6216558.jpeg?cs=srgb&dl=pexels-dothanhyb-6216558.jpg&fm=jpg"
  }
];
var allReels = document.querySelector('.all-reels')

var isMuted = true;

function addData() { var sum = ''
reels.forEach(function(elem,idx) {
    sum = sum + `<div class="reel">
                <video autoplay loop ${elem.isMuted? 'muted' : ''} src="${elem.video}"></video>
               <div class="mute" id=${idx}>
               ${elem.isMuted? '<i class="ri-volume-mute-line"></i>' : '<i class="ri-volume-up-line"></i>'}
               </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id="${idx}" class="follow">${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div id="${idx}"class="like">
                            <h4 class="like-icon icon"> ${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                             <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-message-2-line"></i></h4>
                             <h6>${elem.commentCount}</h6>
                         </div>
                       <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                             <h6>${elem.shareCount}</h6>
                         </div>
                          <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-line"></i></h4>
                         </div>
                         

                    </div>
                </div>`
})

allReels.innerHTML = sum;
}

addData();

allReels.addEventListener('click',function(dets){

if(dets.target.className === 'like'){
  if(!reels[dets.target.id].isLiked){
  reels[dets.target.id].likeCount++
  reels[dets.target.id].isLiked = true
}else{
  reels[dets.target.id].likeCount--
  reels[dets.target.id].isLiked = false
}

addData()
}

if(dets.target.className === 'follow'){
  if(!reels[dets.target.id].isFollowed){
  reels[dets.target.id].isFollowed = true
  }else{reels[dets.target.id].isFollowed = false}
  addData();
}

if(dets.target.className === 'mute'){
  if(!reels[dets.target.id].isMuted){
    reels[dets.target.id].isMuted = true
  }else{
    reels[dets.target.id].isMuted = false
  }
  addData();
}


})
