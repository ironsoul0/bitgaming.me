import clsx from "clsx";
import React from "react";
// import { useRouter } from 'next/router';

// import { useLeaderboard } from '../../hooks';
// import { CrossIcon, GameType, gameTypes } from '../../core';
// import { Spinner } from '../../components';

const default_avatar =
  "https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png";

export const UserRow: React.FC<any> = ({
  name,
  score,
  avatar,
  className,
}: any) => {
  return (
    <div
      className={clsx([
        "flex justify-between h-10 mx-2 justify-between",
        className,
      ])}
    >
      <div className="flex flex-col items-start justify-center col-span-6">
        <div className="flex items-center grid grid-cols-12 gap-2">
          <div className="flex flex-col items-center justify-center col-span-2">
            <div
              className="bg-gray-300 rounded-full h-9 w-9"
              style={{
                backgroundImage:
                  "url(" + (avatar ? avatar : default_avatar) + ")",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="ml-2 overflow-hidden col-span-10">
            <p className="flex flex-col text-lg text-white truncate align-middle font-regular">
              {name}
            </p>
          </div>
        </div>
      </div>
      <p className="flex items-center justify-center w-20 py-1 text-xl font-bold bg-gray-300 rounded-md">
        {score?.toFixed(1)}
      </p>
    </div>
  );
};

// type RouteParams = {
//   type: GameType;
// };

// export const LeaderboardPage: React.FC = () => {
//     const router = useRouter();
//     const { pid } = router.query;
//   // const { type } = useParams<RouteParams>();
//   const leaderboard = useLeaderboard(pid);
//
//   const closeGame = () => {
//     router.push('/');
//   };
//
//   const gameInfo = gameTypes.filter((x) => x.id === pid)[0];
//
//   return (
//     <div className="px-4 pt-5 relative">
//       {leaderboard ? (
//         <div>
//           <div className="absolute top-5 right-4 w-8 text-black z-30 animate-smooth-appear" onClick={closeGame}>
//             <CrossIcon className="text-gray-500" />
//           </div>
//           <div className="mx-2 animate-smooth-appear">
//             <p className="text-lg text-gray-500">Результаты контактов</p>
//             <p className="font-bold text-4xl mb-10">{gameInfo.name}</p>
//           </div>
//           <div className="animate-smooth-appear">
//             {leaderboard.length > 0 ? (
//               leaderboard.map((user, index) => <UserRow key={user.id} {...user} index={index} className="mb-4" />)
//             ) : (
//               <p className="px-2">Контакты отсутствуют</p>
//             )}
//           </div>
//         </div>
//       ) : (
//         <Spinner />
//       )}
//     </div>
//   );
// };
