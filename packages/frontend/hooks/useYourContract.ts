import { useEthers } from "@usedapp/core";
import { MyContract } from "config/contracts";
import { Contract } from "ethers";
import {useMemo} from "react";
import {chainReadProvider} from "../config";
import {YourContract as YourContractType} from "../types/typechain";

export const useYourContract = () => {
    const { account, library } = useEthers();
    console.log("account", account, library);

    const contract = useMemo(
        () =>
            new Contract(
                MyContract.address,
                MyContract.abi,
                account ? library?.getSigner() : chainReadProvider
            ),
        [account, library]
    ) as YourContractType;

    return contract;
};

// import { useAtom, atom } from 'jotai';
// import { useEffect, useState } from 'react';
//
// import { createUser, CreateUserResponse, GetMeResponse } from '../core';

// const meAtom = atom<CreateUserResponse | null>(null);


// export const useMe = () => {
//     const { account, library } = useEthers();
//   const [me, setMe] = useAtom(meAtom);
//
//   useEffect(() => {
//     const getMe = async () => {
//       try {
//         const getMeResult = (await aituBridge.getMe()) as GetMeResponse;
//         const { phone } = await aituBridge.getPhone();
//         const { data: userInfo } = await createUser({ ...getMeResult, phone });
//         setMe(userInfo);
//       } catch (e) {
//         console.log(e);
//       }
//     };
//
//     if (!me) {
//       getMe();
//     }
//   }, []);
//
//   return me;
// };
