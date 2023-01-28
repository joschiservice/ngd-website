import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";

const emailPrefix = "email="
const passwordPrefix = "password="
const commandExample = 'yarn createInitialUser email="example@mail.com" password="VeRrYsEcReTpAsSwOrd"'

const saltRounds = 13

let email = ""
let password = ""

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);

    if (val.startsWith(emailPrefix)) {
        email = val.replace(emailPrefix, "")
    } else if (val.startsWith(passwordPrefix)) {
        password = val.replace(passwordPrefix, "")
    }
});

if (email === "" || email.trim() === "") {
    throw new Error("ERROR: E-Mail is missing. Please run the command again with all required credentials: " + commandExample)
}

if (password === "" || password.trim() === "") {
    throw new Error("ERROR: Password is missing. Please run the command again with all required credentials: " + commandExample)
}

const prisma = new PrismaClient()

// ToDo: Return if a root user already exist

console.time('PasswordHashCalculationTime')

bcrypt
    .hash(password, saltRounds)
    .then(hash => {
        console.timeEnd('PasswordHashCalculationTime')
        prisma.user.create({
            data: {
                email: email,
                password: hash
            }
        }).then(user => {
            console.log("Successfully created the initial root user. ID: " + user.id)
        })
    })
    .catch(err => console.error(err.message))
