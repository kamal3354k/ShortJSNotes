
        // For of is always us for array

        const myArray = ["Apple", "Banana", "Papaya"];

        for (var n of myArray) {
            console.log(n);
        }


        // For in is always us for object
        const object = {
            yt: "youtube",
            go: "google",
            ya: "yahoo"
        }
        for (var p in object) {
            console.log(`Key is : ${p} and Values is ${object[p]}`);
        }


        // forEach is also use Array

        var newArray = [10, 20, 30, ]
        newArray.forEach((val, inx, arra) => {
            console.log(val + inx + "  " + arra[inx] * 10);
        })



        //JS Call Back
        function A(call, call2) {
            setTimeout(function () {
                console.log("Hello!");
                call();
                call2()
            }, 2000);
        }

        function B() {
            console.log("I am Kamal");
        }

        function C() {
            console.log("I am good");
        }
        A(B, C);


        // Promise

        const num = prompt("What is Your Age ?");
        console.log(num);

        const Pro = () => {
            return new Promise((resolve, reject) => {
                if (num >= 18) {
                    resolve("You can");
                } else {
                    reject("You can't");
                }
            });

        }
        Pro().then((message) => {
                console.log(`${message} drive`)
            })
            .catch((message) => {
                console.log(`${message} drive`);

            });
