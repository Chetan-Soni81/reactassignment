import React from 'react'

import './friendsrefered.css'

const referral_data = {
  wallet_bal: 500,
  code: 'EDCH54'
}

const friends_data = [
  {
    name: 'Dheraj Saxsena',
    ref_amount: 185,
    date: '14 Sep, 2022',
    courses: ['UI/UX', 'Photoshop', 'Illustrator', 'Python', 'MERN', 'Java'],
    courses_enrolled: 6
  },
  {
    name: 'Saurabh Mishra',
    ref_amount: 485,
    date: '16 Sep, 2022',
    courses: ['UI/UX', 'Photoshop', 'Illustrator', 'Python', 'MERN', 'Java', 'C++', 'React Native', 'Competitive Programming', 'Guitar', 'Singing', 'Web Development with PHP/SQL', 'App Development', 'Financial Modelling', 'Digital Marketing', 'Photography', 'Premiere Pro', 'Data Science', 'DSA', 'Affer Effects', 'Python'],
    courses_enrolled: 23
  }, {
    name: 'Prafull Kumar',
    ref_amount: 485,
    date: '18 Sep, 2022',
    courses: ['UI/UX', 'Photoshop', 'Illustrator', 'Python', 'MERN', 'Java', 'C++', 'React Native', 'Competitive Programming', 'Guitar', 'Singing', 'Web Development with PHP/SQL', 'App Development', 'Financial Modelling', 'Digital Marketing', 'Photography', 'Premiere Pro', 'Data Science', 'DSA', 'Affer Effects', 'Python'],
    courses_enrolled: 23
  }
]

const FriendsRefered = () => {
  return (
    <main className='friends_main'>
      <section className="ref_details">
        <div className="ref_code_pane">
          <h3>Your Referal Code</h3>
          <div>{referral_data.code}</div>
        </div>
        <div className="wallet_bal_pane">
          <h3>Wallet Balance</h3>
          <div>₹{referral_data.wallet_bal}</div>
        </div>
      </section>

      <section className="who__enrolled">
        <div className='heading'><h3>Friends who enrolled</h3><h3 className='heading__data'>({friends_data.length})</h3></div>
        <div className="friends__repeater">
          {
            friends_data.map(item => <div className="friends__item">
              <section className='item__header'>
                <h4>{item.name}</h4><p>{item.date}</p>
              </section>
              <section className='item__body'>
                <h5>Course Enrolled({item.courses_enrolled})</h5>
                <div className="course__repeater">
                  {(item.courses).map(course =>
                    <div className="course__item">
                      {course}
                    </div>
                  )}
                </div>
              </section>
              <section className='item__footer'>
                <span>Referal Amount</span>
                <span className='ref__amount'>₹{item.ref_amount}</span>
              </section>
            </div>)
          }
        </div>
      </section>

      <div>
        <h3 className="bottom__text">
          Terms & Conditions
        </h3>
      </div>
    </main>
  )
}

export default FriendsRefered