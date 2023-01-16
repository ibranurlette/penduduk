import React, { useState } from "react";
import "./App.css";
import Header from "./Header";

const KelurahanKampungBaru = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-home">
      <Header toggle={toggle} setToggle={setToggle} />

      <div
        className="h-screen flex flex-col 
                    items-center justify-center"
      >
        <p className="text-white text-xl mb-3 underline">Data Balita</p>

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-white uppercase bg-aksen ">
              <tr>
                <th scope="col" class="px-6 py-3">
                  No
                </th>
                <th scope="col" class="px-6 py-3">
                  Kelurahan
                </th>
                <th scope="col" class="px-6 py-3">
                  Nama
                </th>
                <th scope="col" class="px-6 py-3">
                  Umur
                </th>
                <th scope="col" class="px-6 py-3">
                  Alamat
                </th>
                <th scope="col" class="px-6 py-3">
                  Ayah
                </th>
                <th scope="col" class="px-6 py-3">
                  Ibu
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  JATI
                </th>
                <td class="px-6 py-4">MUHAMMAD GIBRAN</td>
                <td class="px-6 py-4">1 TAHUN</td>
                <td class="px-6 py-4">JL. SAMANHUDI LK. III NO. 27</td>
                <td class="px-6 py-4">ABDUL RAHMAT SILALAHI</td>
                <td class="px-6 py-4">MARIANI</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  2
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  HAMDAN
                </th>
                <td class="px-6 py-4">YAZID AL RASYID SIRAIT</td>
                <td class="px-6 py-4">4 TAHUN</td>
                <td class="px-6 py-4">JL. PACAR NO.15-D</td>
                <td class="px-6 py-4">TOMY BASIR</td>
                <td class="px-6 py-4">ROS INTAN</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  3
                </th>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  SUKARAJA
                </th>
                <td class="px-6 py-4">GIGI PRISCILLIA CHANDRA</td>
                <td class="px-6 py-4">2 TAHUN 2 BULAN</td>
                <td class="px-6 py-4">JL B.KATAMSO GG BARU NO.17</td>
                <td class="px-6 py-4">JOHAN CHANDRA</td>
                <td class="px-6 py-4">CICILIA DARMA</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KelurahanKampungBaru;
