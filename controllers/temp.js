// EJS session user controller archive

//session middleware
// router.use((req, res, next) => {
//   if (req.session.loggedIn){
//       next()
//   } else {
//       res.redirect("/user/login")
//   }
// })

// var roleEnum = User.schema.path("role").enumValues;
// router.post("/signup", async (req, res) => {
//     // hashing the password
//     req.body.password = await bcrypt.hash(
//       req.body.password,
//       await bcrypt.genSalt(10)
//     );
//     if (req.body.question == "admin") {
//       req.body.role = roleEnum[1];
//     } else {
//       req.body.role = roleEnum[0];
//     }
//     let testObj = req.body;
//     const { question, ...newObj } = testObj;
//     console.log(newObj);
//     User.findOne({ username: newObj.username }, function (err, olduser) {
//       if (!err) {
//         if (olduser) {
//           res.render("user/signup", {
//             statusCode: 409,
//             statusText: "Email Already Exists",
//           });
//         } else if (!olduser) {
//           User.create(newObj, (err, user) => {
//             console.log("user------------" + user);
//             if (!err) {
//               console.log({ statusCode: 201, statusText: "CREATED" });
//               res.redirect("/user/login");
//             } else {
//               res.status(500).render("errors/500", { error: err });
//             }
//           });
//         }
//       } else {
//         res.status(500).render("errors/500", { error: err });
//       }
//     });
//     console.log("made it here");
//   });

//   // The Login Routes (post => submit form)
// router.post("/login", (req, res) => {
//     // get the data from the request body
//     const { username, password } = req.body;
//     User.findOne({ username }, (err, user) => {
//       // checking if userexists
//       if (!user) {
//         res.render("user/login", { statusText: "User does not exist" });
//       } else {
//         //check if password matches
//         const result = bcrypt.compareSync(password, user.password);
//         if (result) {
//           req.session.username = username;
//           req.session.loggedIn = true;
//           res.redirect("/characters");
//         } else {
//           res.render("user/login", { statusText: "Wrong Password" });
//         }
//       }
//     });
//   });
//   // logout route
//   router.get("/logout", (req, res) => {
//     // destroy session and redirect to main page
//     req.session.destroy((err) => {
//       res.redirect("/");
//     });
//   });