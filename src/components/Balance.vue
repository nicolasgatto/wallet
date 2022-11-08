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
            const uid = user.uid;

            getDoc(doc(db, "users", uid)).then(docSnap => {
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    const value = docSnap.get("balance");
                    const commas = value.toLocaleString("en-US");
                    document.getElementById("balance").innerText = "$ " + commas;
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
        font-weight: bold;
        letter-spacing: 1px;
        margin-top: 50%;
        font-family: Poppins;
        font-size: 48px;
        color: #ffffff;
    }
</style>