<template>
    <div class="container">
        <div class="balance">
            <span id="balance" class="d-flex justify-content-center"></span>
        </div>
    </div>
</template>

<script setup>
    import {
        getAuth,
        onAuthStateChanged
    } from '@firebase/auth';
    import {
        getFirestore,
        doc,
        getDoc
    } from "firebase/firestore";

    const db = getFirestore();
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;

            getDoc(doc(db, "users", uid)).then(docSnap => {
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    const value = docSnap.get("balance");
                    document.getElementById("balance").innerText = "$" + value;
                } else {
                    console.log("No such document!");
                }
            })
        } else {
        }
    });
</script>

<style scoped>
    span{
        letter-spacing: 0.5px;
        margin-top: 30%;
        font-family: Poppins;
        font-size: 48px;
        color: #ffffff;
    }
</style>