const FollowUsOnInstagram = ({ images, speed }) => {
  return (
    <>
      <div  className="follow-us-container" style={{ marginTop: 110 }}>
        <h2 
          className="follow-us-title text-center"
          style={{ fontFamily: "Anton sans-serif", fontWeight: 600 }}
        >
          Stay Stylishly Updated!
        </h2>
        <p className="follow-us-subtitle">Follow us on Instagram for:</p>
        <p
          className="follow-us-description text-center"
          // style={{ width: 830, marginBottom: 30, marginLeft: 250 }}
        >
          Exclusive deals | Girlfriend goals | Fashion tips & trends | Hot sale
          alerts | Daily dose of fashion | Exclusive promotions | Trendy updates
          | Sale notifications | Product demos | Girl power moments!
        </p>
      </div>
      <div className="inner">
        <div className="wrapper">
          {Array(3)
            .fill()
            .map((_, index) => (
              <section key={index} style={{ "--speed": `${speed}ms` }}>
                {images.map(({ id, image }) => (
                  <div className="image" key={id}>
                    <img
                      className="scroll-img"
                      height={200}
                      src={image}
                      alt={id}
                    />
                  </div>
                ))}
              </section>
            ))}
        </div>
      </div>
    </>
  );
};

export default FollowUsOnInstagram;

// const FollowUsOnInstagram = ({ images, speed }) => {
//   return (
//     <>
//       <div style={{ marginTop: 170, marginBottom: 30 }}>
//         <h2
//           className="text-center"
//           style={{ fontFamily: "Anton sans-serif", fontWeight: 600 }}
//         >
//           Stay Stylishly Updated!
//         </h2>
//         <p
//           style={{
//             marginLeft: 530,
//             fontSize: 20,
//             fontFamily: "Anton sans-serif",
//             fontWeight: 300,
//           }}
//         >
//           Follow us on Instagram for:
//         </p>
//         <p
//           className="text-center"
//           style={{ width: 830, marginBottom: 30, marginLeft: 300 }}
//         >
//           Exclusive deals| Girlfriend goals Fashion tips & trends | Hot sale
//           alerts| Daily dose of fashion| Exclusive promotions| Trendy updates
//           Sale notifications| Product demos| Girl power moments!
//         </p>
//       </div>
//       <div className="inner">
//         <div className="wrapper">
//           <section style={{ "--speed": `${speed}ms` }}>
//             {images.map(({ id, image }) => (
//               <div className="image" key={id}>
//                 <img className="scroll-img" height={200} src={image} alt={id} />
//               </div>
//             ))}
//           </section>
//           <section style={{ "--speed": `${speed}ms` }}>
//             {images.map(({ id, image }) => (
//               <div className="image" key={id}>
//                 <img className="scroll-img" src={image} height={200} alt={id} />
//               </div>
//             ))}
//           </section>
//           <section style={{ "--speed": `${speed}ms` }}>
//             {images.map(({ id, image }) => (
//               <div className="image" key={id}>
//                 <img className="scroll-img" height={200} src={image} alt={id} />
//               </div>
//             ))}
//           </section>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FollowUsOnInstagram;
