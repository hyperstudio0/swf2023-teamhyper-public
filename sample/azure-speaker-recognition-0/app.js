// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.
//
// (function() {
//     // <code>
//     "use strict";
//
//     // pull in the required packages.
//     var sdk = require("microsoft-cognitiveservices-speech-sdk");
//     var readline = require("readline");
//
//     // replace with your own subscription key,
//     // service region (e.g., "westus"), and
//     // the name of the file you save the synthesized audio.
//     var subscriptionKey = "57666f7ad5b34661bf79c1b338eeb1af";
//     var serviceRegion = "westus"; // e.g., "westus"
//     var filename = "YourAudioFile.wav";
//
//     // we are done with the setup
//
//     // now create the audio-config pointing to our stream and
//     // the speech config specifying the language.
//     var audioConfig = sdk.AudioConfig.fromAudioFileOutput(filename);
//     var speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
//
//     // create the speech synthesizer.
//     var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
//
//     var rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//
//     rl.question("Type some text that you want to speak...\n> ", function (text) {
//         console.log(text);
//         rl.close();
//         // start the synthesizer and wait for a result.
//         synthesizer.speakTextAsync(text,
//             function (result) {
//                 if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
//                     console.log("synthesis finished.");
//                 } else {
//                     console.error("Speech synthesis canceled, " + result.errorDetails +
//                         "\nDid you update the subscription info?");
//                 }
//                 synthesizer.close();
//                 synthesizer = undefined;
//             },
//             function (err) {
//                 console.trace("err - " + err);
//                 synthesizer.close();
//                 synthesizer = undefined;
//             });
//         console.log("Now synthesizing to: " + filename);
//     });
//     // </code>
//
// }());
const https = require('https');
const fs = require('fs');
const subscriptionKey = '57666f7ad5b34661bf79c1b338eeb1af'; // Azure에서 받은 키를 입력하세요

// 프로필을 생성합니다.
function createProfile() {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'westus.api.cognitive.microsoft.com',
            port: 443,
            path: '/spid/v1.0/identificationProfiles',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': subscriptionKey,
            },
        };

        const req = https.request(options, (res) => {
            res.on('data', (d) => {
                resolve(JSON.parse(d));
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        req.write(JSON.stringify({ "locale":"en-us" }));
        req.end();
    });
}

// 생성된 프로필에 오디오를 등록합니다.
function enrollProfileAudio(profileId, audioFile) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'westus.api.cognitive.microsoft.com',
            port: 443,
            path: `/spid/v1.0/identificationProfiles/${profileId}/enroll`,
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Ocp-Apim-Subscription-Key': subscriptionKey,
            },
        };

        const req = https.request(options, (res) => {
            res.on('data', (d) => {
                resolve(JSON.parse(d));
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        const audioData = fs.readFileSync(audioFile);
        req.write(audioData);
        req.end();
    });
}

// 등록된 프로필을 이용해 새로운 오디오를 인식합니다.
function identifySpeaker(profileId, audioFile) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'westus.api.cognitive.microsoft.com',
            port: 443,
            path: '/spid/v1.0/identify?identificationProfileIds=' + profileId,
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Ocp-Apim-Subscription-Key': subscriptionKey,
            },
        };

        const req = https.request(options, (res) => {
            res.on('data', (d) => {
                resolve(JSON.parse(d));
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        const audioData = fs.readFileSync(audioFile);
        req.write(audioData);
        req.end();
    });
}

// 이 함수를 사용하여 프로필 생성, 오디오 등록, 새로운 오디오 인식을 실행할 수 있습니다.
async function run() {
    try {
        const profile = await createProfile();
        console.log(`Created profile with ID: ${profile.identificationProfileId}`);

        await enrollProfileAudio(profile.identificationProfileId, 'aboutSpeechSdk.wav');
        console.log('Enrolled audio to profile');

        const result = await identifySpeaker(profile.identificationProfileId, 'aboutSpeechSdk2.wav');
        console.log('Speaker identification result:', result);

    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

run();
