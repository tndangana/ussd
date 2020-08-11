import { Response, NextFunction, Request } from "express";
import { venueService } from '../venue/service';
import { movieService } from '../movie/service';
import { IMovie } from "../movie/model";

export const ussd = async (req: Request, res: Response, next: NextFunction) => {
    const SESSION_CONTINUE = "CON ";
    const SESSION_END = "END "
    const venueSer = venueService();
    const movieSrv = movieService();
    let name: string[] = [];
    let response = ``

    let { phoneNumber, sessionId, serviceCode, text }: any = req.body;
    let length = text.split('*').length;
    let txt = text.split('*');
    let id: string;
    if (text === '') {

        let response =
            `${SESSION_CONTINUE} Welcome To Movie Plaza. Select Options From Below\n
    1. Buy Ticket\n
    2. Check Available Movie(s)\n
    3. Available Promotions\n
    `;

        res.send(response);
    }
    else if (text === '1' && txt[0] === '1' && length === 1) {
        let response = `${SESSION_CONTINUE} Available Movie thearter(s)\n
        1. SK JOINA\n
        2. SK SEMI LEVY\n
        Select A Movie Thearter  `;
        res.send(response);
    }
    // Movies being shown At SK JOINA
    else if (txt[1] === '1' && length === 2) {

        let response = ` ${SESSION_CONTINUE} Movies Being Shown At SK JOINA\n 
        1. Avengers End Game\n 
        2. Charlies Angel \n 
        Select movie you want to watch. `
        res.send(response);
    }

    //watching avengers at SK JOINA
    else if (txt[1] === '1' && length === 3 && txt[length - 1] === '1') {
        let response = `${SESSION_CONTINUE} Avengers End Game is being shown at the following times\n
      1. 15:00\n 
      2. 20:00\n
    
        Select Time You Want To Watch The Movie`;
        res.send(response);
        console.log(`txt[length - 1] === '1'--->`, txt);
    }

    //watching  Avengers at SK JOINA AT Three
    else if (txt[1] === '1' && length === 4 && txt[length - 1] === '1') {
        let isAvailable: boolean = true;
        let response = ``;

        //Check if slot is not full
        if (isAvailable) {
            response = `${SESSION_CONTINUE} You want to watch movie At 15:00.\nHow many tickets do you want?\n 
          `
            response += `Maximum, is 5 tickets`;
        }
        //slot is full
        else if (!isAvailable) {
            response = `${SESSION_CONTINUE} The Slot Is Full. Select Another Prefered Time.\n `

        }
        res.send(response);
    }
    //watching  Avengers at SK JOINA AT Eight

    else if (txt[1] === '1' && length === 4 && txt[length - 1] === '2') {
        let isAvailable: boolean = true;
        let response = ``;
        //Check if slot is not full
        if (isAvailable) {
            response = `${SESSION_CONTINUE} You want to watch movie At 20:00.\nHow many tickets do you want?\n 
          `
            response += `Maximum, is 5 tickets`;
        }
        //slot is full

        else if (!isAvailable) {
            response = `${SESSION_CONTINUE} The Slot Is Full. Select Another Preffered Time.\n `

        }
        res.send(response);
    }

    //====================================================
    //watching charlies Angels at SK JOINA
    else if (txt[1] === '2' && length === 3 && txt[length - 1] === '2') {
        let response = `${SESSION_CONTINUE} Charlies Angels is being shown at the following times\n
  1. 15:00\n 
  2. 20:00\n

    Select Time You Want To Watch The Movie`;
        res.send(response);
    }

    //watching  charlies Angels at SK JOINA AT Three
    else if (txt[1] === '2' && length === 4 && txt[length - 1] === '1') {
        let isAvailable: boolean = true;
        let response = ``;

        //Check if slot is not full
        if (isAvailable) {
            response = `${SESSION_CONTINUE} You want to watch movie At 15:00.\nHow many tickets do you want?\n 
      `
            response += `Maximum, is 5 tickets`;
        }
        //slot is full
        else if (!isAvailable) {
            response = `${SESSION_CONTINUE} The Slot Is Full. Select Another Prefered Time.\n `

        }
        res.send(response);
    }


    // Movies being shown At SK SEMI LEVY
    else if (txt[1] === '2' && length === 2) {

        let response = ` ${SESSION_CONTINUE} Movies Being Shown At SK SEMI LEVY\n 
        1. Last Vegas\n 
        2. Terminator \n 
        Select movie you want to watch. `
        res.send(response);
    }

    //watching Last Vegas at SK SEMI LEVY
    else if (txt[1] === '2' && length === 3 && txt[length - 1] === '1') {
        let response = `${SESSION_CONTINUE} Last Vegas is being shown at the following times\n
  1. 15:30\n 
  2. 20:30\n
  Select Time You Want To Watch The Movie`;
        res.send(response);
    }


    //watching  Last Vegas at SK SEMI LEVY AT 1530
    else if (txt[1] === '2' && length === 4 && txt[length - 1] === '1') {
        let isAvailable: boolean = true;
        let response = ``;

        //Check if slot is not full
        if (isAvailable) {
            response = `${SESSION_CONTINUE} You want to watch movie At 15:30.\nHow many tickets do you want?\n 
              `
            response += `Maximum, is 5 tickets`;
        }
        //slot is full
        else if (!isAvailable) {
            response = `${SESSION_CONTINUE} The Slot Is Full. Select Another Prefered Time.\n `

        }
        res.send(response);
    }
    //watching  Last Vegas at SK SEMI LEVY AT 20:30

    else if (txt[1] === '2' && length === 4 && txt[length - 1] === '2') {
        let isAvailable: boolean = true;
        let response = ``;
        //Check if slot is not full
        if (isAvailable) {
            response = `${SESSION_CONTINUE} You want to watch movie At 20:30.\nHow many tickets do you want?\n 
              `
            response += `Maximum, is 5 tickets`;
        }
        //slot is full

        else if (!isAvailable) {
            response = `${SESSION_CONTINUE} The Slot Is Full. Select Another Preffered Time.\n `

        }
        res.send(response);
    }


    else if (txt[1] === '1'  && length === 5) {

        console.log(`value is --->${txt[length - 1]}`)
        response = `${SESSION_CONTINUE} You Are about to buy ${txt[length - 1]} tickets.
        Press\n
        1.To Pay\n
        2.To Go Back Home\n `
        res.send(response);
    } else if (txt[1] === '1' && length === 6) {

        response = `${SESSION_END} An Sms to confirm payment will be sent to ${phoneNumber}`
        res.send(response);

    }

    else if (txt[1] === '2' && length === 5) {

        console.log(`value is --->${txt[length - 1]}`)
        response = `${SESSION_CONTINUE} You Are about to buy ${txt[length - 1]} tickets.
        Press\n
        1.To Pay\n
        2.To Go Back Home\n `
        res.send(response);
    } else if (txt[1] === '1' && length === 6) {

        response = `${SESSION_END} An Sms to confirm payment will be sent to ${phoneNumber}`
        res.send(response);

    }


    else if (text === '2') {
        const list: any[] = [];
        (await movieSrv.findAll()).map(({ id, title }: any) => {
            let body = { id, title };
            return body;
        }).forEach(x => {
            list.push(x);
        });
        console.log(JSON.stringify(list).toUpperCase())
        let response = `${SESSION_END} Available Movies\n
        1. ${list[0].title}\n
        2. ${list[1].title}\n
        3. ${list[2].title}\n
      
        `
        res.send(response);
    }
    else {
        response = `${SESSION_END} Can't do shit`;
    }




}

//   // add device
//   else if (text === '1') {
//     // check if user is agent
//   	message = 'CON Enter device IMEI number';
//   }
//   else if (length === 2 && txt[0] === '1') {
//     message = 'CON Enter device color';
//   }