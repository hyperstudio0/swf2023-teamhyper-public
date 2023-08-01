import {Injectable} from '@nestjs/common';
import * as process from 'process';
import axios from 'axios';
import {createReadStream} from 'fs';
import * as FormData from 'form-data';
import {ReadStream} from "typeorm/browser/platform/BrowserPlatformTools";

@Injectable()
export class AzureService {

    constructor() {
    }

    async createProfile(): Promise<string> {
        try {

            console.log(process.env.AZURE_SUBSCRIPTION_URL, 'process.env.AZURE_SUBSCRIPTION_URL');
            const {data} = await axios({
                url: `${process.env.AZURE_COGNITIVE_HOST}/speaker-recognition/verification/text-dependent/profiles?api-version=2021-09-05`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key': process.env.AZURE_SUBSCRIPTION_URL,
                },
                data: JSON.stringify({
                    'locale': 'en-us'
                }),
            })
            return data.identificationProfileId;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    async enrollProfileAudio(audioFile: Buffer): Promise<any> {
        const profileId = await this.createProfile();
        const formData = new FormData();
        formData.append('audioFile', audioFile, { filename: 'audio.wav', contentType: 'audio/wav' });
        formData.append('locale', 'en-us');
        console.log(process.env.AZURE_SUBSCRIPTION_URL, 'process.env.AZURE_SUBSCRIPTION_URL');
        try {
            const { data } = await axios.post(`${process.env.AZURE_COGNITIVE_HOST}/speaker-recognition/identification/text-independent/profiles/${profileId}/enrollments?api-version=2021-09-05`, formData, {
                headers: {
                    ...formData.getHeaders(),
                    'Ocp-Apim-Subscription-Key': process.env.AZURE_SUBSCRIPTION_URL,
                }
            });
            return data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
}
