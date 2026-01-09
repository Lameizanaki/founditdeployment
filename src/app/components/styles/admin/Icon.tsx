// src/app/components/styles/admin/Icon.tsx
"use client";

import React from "react";

export function IconMenu() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconClose() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconBell() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.84375 14C6.96078 14.2027 7.12909 14.371 7.33178 14.488C7.53446 14.605 7.76438 14.6666 7.99842 14.6666C8.23245 14.6666 8.46237 14.605 8.66505 14.488C8.86774 14.371 9.03605 14.2027 9.15308 14"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.17418 10.216C2.08709 10.3115 2.02962 10.4302 2.00875 10.5577C1.98788 10.6852 2.00453 10.8161 2.05665 10.9343C2.10878 11.0525 2.19414 11.1531 2.30235 11.2237C2.41056 11.2943 2.53697 11.3319 2.66618 11.332H13.3328C13.462 11.3321 13.5885 11.2946 13.6968 11.2241C13.805 11.1536 13.8905 11.0532 13.9428 10.935C13.995 10.8169 14.0118 10.6861 13.9911 10.5586C13.9704 10.431 13.9131 10.3123 13.8262 10.2167C12.9395 9.3027 11.9995 8.33136 11.9995 5.33203C11.9995 4.27117 11.5781 3.25375 10.8279 2.5036C10.0778 1.75346 9.06038 1.33203 7.99951 1.33203C6.93865 1.33203 5.92123 1.75346 5.17109 2.5036C4.42094 3.25375 3.99951 4.27117 3.99951 5.33203C3.99951 8.33136 3.05885 9.3027 2.17418 10.216Z"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconUserCircle() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12.6654 14V12.6667C12.6654 11.9594 12.3844 11.2811 11.8843 10.781C11.3842 10.281 10.7059 10 9.9987 10H5.9987C5.29145 10 4.61318 10.281 4.11308 10.781C3.61298 11.2811 3.33203 11.9594 3.33203 12.6667V14"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.9987 7.33333C9.47146 7.33333 10.6654 6.13943 10.6654 4.66667C10.6654 3.19391 9.47146 2 7.9987 2C6.52594 2 5.33203 3.19391 5.33203 4.66667C5.33203 6.13943 6.52594 7.33333 7.9987 7.33333Z"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Sidebar icons (MUST be currentColor) */
export function IconDashboard() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V9.16667C2.5 9.6269 2.8731 10 3.33333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.668 2.5H12.5013C12.0411 2.5 11.668 2.8731 11.668 3.33333V5.83333C11.668 6.29357 12.0411 6.66667 12.5013 6.66667H16.668C17.1282 6.66667 17.5013 6.29357 17.5013 5.83333V3.33333C17.5013 2.8731 17.1282 2.5 16.668 2.5Z"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.668 10H12.5013C12.0411 10 11.668 10.3731 11.668 10.8333V16.6667C11.668 17.1269 12.0411 17.5 12.5013 17.5H16.668C17.1282 17.5 17.5013 17.1269 17.5013 16.6667V10.8333C17.5013 10.3731 17.1282 10 16.668 10Z"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 13.332H3.33333C2.8731 13.332 2.5 13.7051 2.5 14.1654V16.6654C2.5 17.1256 2.8731 17.4987 3.33333 17.4987H7.5C7.96024 17.4987 8.33333 17.1256 8.33333 16.6654V14.1654C8.33333 13.7051 7.96024 13.332 7.5 13.332Z"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// product icon
export function IconBox() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9.16667 18.1079C9.42003 18.2542 9.70744 18.3312 10 18.3312C10.2926 18.3312 10.58 18.2542 10.8333 18.1079L16.6667 14.7746C16.9198 14.6285 17.13 14.4183 17.2763 14.1653C17.4225 13.9123 17.4997 13.6252 17.5 13.3329V6.66626C17.4997 6.37399 17.4225 6.08693 17.2763 5.8339C17.13 5.58086 16.9198 5.37073 16.6667 5.22459L10.8333 1.89126C10.58 1.74498 10.2926 1.66797 10 1.66797C9.70744 1.66797 9.42003 1.74498 9.16667 1.89126L3.33333 5.22459C3.08022 5.37073 2.86998 5.58086 2.72372 5.8339C2.57745 6.08693 2.5003 6.37399 2.5 6.66626V13.3329C2.5003 13.6252 2.57745 13.9123 2.72372 14.1653C2.86998 14.4183 3.08022 14.6285 3.33333 14.7746L9.16667 18.1079Z"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 18.3333V10"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.74219 5.83203L10.0005 9.9987L17.2589 5.83203"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 3.55859L13.75 7.85026"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconUsers() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13.3346 17.5V15.8333C13.3346 14.9493 12.9834 14.1014 12.3583 13.4763C11.7332 12.8512 10.8854 12.5 10.0013 12.5H5.0013C4.11725 12.5 3.2694 12.8512 2.64428 13.4763C2.01916 14.1014 1.66797 14.9493 1.66797 15.8333V17.5"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.332 2.60547C14.0468 2.79078 14.6799 3.20819 15.1318 3.79219C15.5837 4.37619 15.8289 5.09371 15.8289 5.83214C15.8289 6.57056 15.5837 7.28808 15.1318 7.87208C14.6799 8.45608 14.0468 8.87349 13.332 9.0588"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.332 17.501V15.8344C18.3315 15.0958 18.0857 14.3784 17.6332 13.7946C17.1807 13.2109 16.5471 12.794 15.832 12.6094"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5013 9.16667C9.34225 9.16667 10.8346 7.67428 10.8346 5.83333C10.8346 3.99238 9.34225 2.5 7.5013 2.5C5.66035 2.5 4.16797 3.99238 4.16797 5.83333C4.16797 7.67428 5.66035 9.16667 7.5013 9.16667Z"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// flag looking icon
export function IconReport() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.33203 18.3346V3.33464C3.33203 3.20526 3.36215 3.07767 3.42001 2.96196C3.47786 2.84624 3.56187 2.74559 3.66536 2.66797C4.53085 2.01886 5.58351 1.66797 6.66536 1.66797C9.16536 1.66797 10.832 3.33464 12.7762 3.33464C13.8873 3.33464 14.7393 3.11241 15.332 2.66797C15.4558 2.57511 15.6031 2.51857 15.7572 2.50467C15.9113 2.49077 16.0663 2.52007 16.2047 2.58928C16.3431 2.65849 16.4595 2.76488 16.5409 2.89653C16.6223 3.02817 16.6654 3.17988 16.6654 3.33464V11.668C16.6654 11.7973 16.6352 11.9249 16.5774 12.0406C16.5195 12.1564 16.4355 12.257 16.332 12.3346C15.4666 12.9837 14.4139 13.3346 13.332 13.3346C10.832 13.3346 9.16536 11.668 6.66536 11.668C5.43546 11.668 4.24872 12.1213 3.33203 12.9413"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSettings() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8.05796 3.44517C8.10387 2.96212 8.32823 2.51354 8.68721 2.18707C9.04618 1.86059 9.51398 1.67969 9.9992 1.67969C10.4844 1.67969 10.9522 1.86059 11.3112 2.18707C11.6702 2.51354 11.8945 2.96212 11.9405 3.44517C11.9681 3.75721 12.0704 4.05801 12.2389 4.32211C12.4074 4.58622 12.637 4.80584 12.9083 4.9624C13.1797 5.11895 13.4847 5.20783 13.7977 5.22152C14.1107 5.2352 14.4223 5.17328 14.7063 5.041C15.1472 4.84081 15.6469 4.81185 16.108 4.95974C16.5691 5.10763 16.9586 5.42179 17.2009 5.84109C17.4431 6.26038 17.5207 6.75481 17.4185 7.22814C17.3163 7.70147 17.0416 8.11984 16.648 8.40183C16.3916 8.5817 16.1823 8.82067 16.0379 9.09852C15.8934 9.37637 15.818 9.68492 15.818 9.99808C15.818 10.3112 15.8934 10.6198 16.0379 10.8976C16.1823 11.1755 16.3916 11.4145 16.648 11.5943C17.0416 11.8763 17.3163 12.2947 17.4185 12.768C17.5207 13.2414 17.4431 13.7358 17.2009 14.1551C16.9586 14.5744 16.5691 14.8885 16.108 15.0364C15.6469 15.1843 15.1472 15.1553 14.7063 14.9552C14.4223 14.8229 14.1107 14.761 13.7977 14.7746C13.4847 14.7883 13.1797 14.8772 12.9083 15.0338C12.637 15.1903 12.4074 15.4099 12.2389 15.674C12.0704 15.9381 11.9681 16.239 11.9405 16.551C11.8945 17.034 11.6702 17.4826 11.3112 17.8091C10.9522 18.1356 10.4844 18.3165 9.9992 18.3165C9.51398 18.3165 9.04618 18.1356 8.68721 17.8091C8.32823 17.4826 8.10387 17.034 8.05796 16.551C8.03041 16.2388 7.92804 15.9379 7.75951 15.6737C7.59098 15.4095 7.36127 15.1898 7.08982 15.0333C6.81837 14.8767 6.51318 14.7878 6.2001 14.7742C5.88703 14.7607 5.57529 14.8227 5.29129 14.9552C4.85036 15.1553 4.35073 15.1843 3.88962 15.0364C3.42852 14.8885 3.03893 14.5744 2.79669 14.1551C2.55445 13.7358 2.47688 13.2414 2.57909 12.768C2.68129 12.2947 2.95596 11.8763 3.34962 11.5943C3.60597 11.4145 3.81523 11.1755 3.9597 10.8976C4.10416 10.6198 4.17958 10.3112 4.17958 9.99808C4.17958 9.68492 4.10416 9.37637 3.9597 9.09852C3.81523 8.82067 3.60597 8.5817 3.34962 8.40183C2.95651 8.1197 2.68233 7.70149 2.58037 7.22848C2.47842 6.75547 2.55596 6.26145 2.79794 5.84243C3.03992 5.4234 3.42905 5.10931 3.8897 4.9612C4.35035 4.81309 4.84961 4.84153 5.29046 5.041C5.57442 5.17328 5.88607 5.2352 6.19904 5.22152C6.512 5.20783 6.81707 5.11895 7.0884 4.9624C7.35974 4.80584 7.58937 4.58622 7.75784 4.32211C7.92632 4.05801 8.02869 3.75721 8.05629 3.44517"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Dashboard stat icons (keep colored as you designed) */
export function IconCube() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 21.7319C11.304 21.9074 11.6489 21.9998 12 21.9998C12.3511 21.9998 12.696 21.9074 13 21.7319L20 17.7319C20.3037 17.5565 20.556 17.3043 20.7315 17.0007C20.9071 16.697 20.9996 16.3526 21 16.0019V8.00186C20.9996 7.65113 20.9071 7.30667 20.7315 7.00302C20.556 6.69937 20.3037 6.44722 20 6.27186L13 2.27186C12.696 2.09632 12.3511 2.00391 12 2.00391C11.6489 2.00391 11.304 2.09632 11 2.27186L4 6.27186C3.69626 6.44722 3.44398 6.69937 3.26846 7.00302C3.09294 7.30667 3.00036 7.65113 3 8.00186V16.0019C3.00036 16.3526 3.09294 16.697 3.26846 17.0007C3.44398 17.3043 3.69626 17.5565 4 17.7319L11 21.7319Z" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V12" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.28906 7L11.9991 12L20.7091 7" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 4.26953L16.5 9.41953" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconClipboard() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#AD46FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.10156 6.03516H20.8956" stroke="#AD46FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.4 5.467C3.14036 5.81319 3 6.23426 3 6.667V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6.667C21 6.23426 20.8596 5.81319 20.6 5.467L18.6 2.8C18.4137 2.55161 18.1721 2.35 17.8944 2.21115C17.6167 2.07229 17.3105 2 17 2H7C6.68951 2 6.38328 2.07229 6.10557 2.21115C5.82786 2.35 5.58629 2.55161 5.4 2.8L3.4 5.467Z" stroke="#AD46FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconUserPlus() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 8V14" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 11H16" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconAlert() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FE9A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8V12" stroke="#FE9A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16H12.01" stroke="#FE9A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconMoney() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2V22" stroke="#00BC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#00BC7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconUser() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 3.12891C16.8578 3.35128 17.6174 3.85217 18.1597 4.55297C18.702 5.25377 18.9962 6.1148 18.9962 7.00091C18.9962 7.88702 18.702 8.74805 18.1597 9.44884C17.6174 10.1496 16.8578 10.6505 16 10.8729" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 20.9989V18.9989C21.9993 18.1126 21.7044 17.2517 21.1614 16.5512C20.6184 15.8508 19.8581 15.3505 19 15.1289" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/** Products dropdown menu icons (MUST be currentColor) */
export function IconDownload() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M8 10V2" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66602 6.66797L7.99935 10.0013L11.3327 6.66797"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconEye() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1.3737 8.23029C1.31814 8.08061 1.31814 7.91596 1.3737 7.76629C1.91483 6.45419 2.83338 5.33231 4.01288 4.54289C5.19239 3.75346 6.57973 3.33203 7.99904 3.33203C9.41834 3.33203 10.8057 3.75346 11.9852 4.54289C13.1647 5.33231 14.0832 6.45419 14.6244 7.76629C14.6799 7.91596 14.6799 8.08061 14.6244 8.23029C14.0832 9.54238 13.1647 10.6643 11.9852 11.4537C10.8057 12.2431 9.41834 12.6645 7.99904 12.6645C6.57973 12.6645 5.19239 12.2431 4.01288 11.4537C2.83338 10.6643 1.91483 9.54238 1.3737 8.23029Z"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconTrash() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M6.66797 7.33203V11.332" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.33203 7.33203V11.332" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M12.6654 4V13.3333C12.6654 13.687 12.5249 14.0261 12.2748 14.2761C12.0248 14.5262 11.6857 14.6667 11.332 14.6667H4.66536C4.31174 14.6667 3.9726 14.5262 3.72256 14.2761C3.47251 14.0261 3.33203 13.687 3.33203 13.3333V4"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M2 4H14" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.33203 3.9987V2.66536C5.33203 2.31174 5.47251 1.9726 5.72256 1.72256C5.9726 1.47251 6.31174 1.33203 6.66536 1.33203H9.33203C9.68565 1.33203 10.0248 1.47251 10.2748 1.72256C10.5249 1.9726 10.6654 2.31174 10.6654 2.66536V3.9987"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconStar(){
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1565_18503)">
      <path d="M5.7634 1.14745C5.78531 1.10318 5.81916 1.06591 5.86113 1.03986C5.90309 1.01381 5.9515 1 6.0009 1C6.0503 1 6.09871 1.01381 6.14067 1.03986C6.18264 1.06591 6.21649 1.10318 6.2384 1.14745L7.3934 3.48695C7.46949 3.64093 7.58181 3.77415 7.72071 3.87517C7.85962 3.9762 8.02096 4.042 8.1909 4.06695L10.7739 4.44495C10.8228 4.45204 10.8688 4.47268 10.9066 4.50455C10.9445 4.53641 10.9726 4.57822 10.9879 4.62525C11.0032 4.67228 11.005 4.72265 10.9932 4.77066C10.9814 4.81868 10.9563 4.86242 10.9209 4.89695L9.0529 6.71595C8.92971 6.836 8.83754 6.98419 8.78432 7.14776C8.7311 7.31134 8.71843 7.48539 8.7474 7.65495L9.1884 10.2249C9.19704 10.2739 9.19176 10.3242 9.17315 10.3703C9.15454 10.4163 9.12336 10.4563 9.08317 10.4854C9.04298 10.5146 8.99539 10.5319 8.94583 10.5354C8.89628 10.5388 8.84675 10.5283 8.8029 10.5049L6.4939 9.29095C6.34176 9.21106 6.17249 9.16932 6.00065 9.16932C5.82881 9.16932 5.65954 9.21106 5.5074 9.29095L3.1989 10.5049C3.15507 10.5282 3.1056 10.5386 3.05613 10.5351C3.00665 10.5316 2.95916 10.5142 2.91905 10.4851C2.87894 10.4559 2.84782 10.416 2.82923 10.3701C2.81064 10.3241 2.80533 10.2738 2.8139 10.2249L3.2544 7.65545C3.2835 7.48581 3.27089 7.31165 3.21767 7.14797C3.16445 6.98429 3.0722 6.83602 2.9489 6.71595L1.0809 4.89745C1.0452 4.86296 1.0199 4.81914 1.00788 4.77098C0.995866 4.72282 0.997618 4.67226 1.01294 4.62504C1.02826 4.57783 1.05653 4.53587 1.09454 4.50394C1.13254 4.47201 1.17875 4.4514 1.2279 4.44445L3.8104 4.06695C3.98053 4.0422 4.14209 3.97648 4.28119 3.87544C4.42029 3.77441 4.53275 3.64108 4.6089 3.48695L5.7634 1.14745Z" fill="#F0B100" stroke="#F0B100" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <clipPath id="clip0_1565_18503">
      <rect width="12" height="12" fill="CurrentColor"/>
      </clipPath>
      </defs>
    </svg>

  );
}

export function IconMore(){
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.9987 8.66536C8.36689 8.66536 8.66536 8.36689 8.66536 7.9987C8.66536 7.63051 8.36689 7.33203 7.9987 7.33203C7.63051 7.33203 7.33203 7.63051 7.33203 7.9987C7.33203 8.36689 7.63051 8.66536 7.9987 8.66536Z" stroke="#1A1A1A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.9987 4.0013C8.36689 4.0013 8.66536 3.70283 8.66536 3.33464C8.66536 2.96645 8.36689 2.66797 7.9987 2.66797C7.63051 2.66797 7.33203 2.96645 7.33203 3.33464C7.33203 3.70283 7.63051 4.0013 7.9987 4.0013Z" stroke="#1A1A1A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.9987 13.3333C8.36689 13.3333 8.66536 13.0349 8.66536 12.6667C8.66536 12.2985 8.36689 12 7.9987 12C7.63051 12 7.33203 12.2985 7.33203 12.6667C7.33203 13.0349 7.63051 13.3333 7.9987 13.3333Z" stroke="#1A1A1A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
}

export function IconTrendUp(){
  return(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.668 4.66797H14.668V8.66797" stroke="CurrentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6654 4.66797L8.9987 10.3346L5.66536 7.0013L1.33203 11.3346" stroke="CurrentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
}

export function IconGlobal(){
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 10C0 4.47715 4.47715 0 10 0H26C31.5228 0 36 4.47715 36 10V26C36 31.5228 31.5228 36 26 36H10C4.47715 36 0 31.5228 0 26V10Z" fill="CurrentColor" fill-opacity="0.1"/>
      <path d="M18.0013 26.3346C22.6037 26.3346 26.3346 22.6037 26.3346 18.0013C26.3346 13.3989 22.6037 9.66797 18.0013 9.66797C13.3989 9.66797 9.66797 13.3989 9.66797 18.0013C9.66797 22.6037 13.3989 26.3346 18.0013 26.3346Z" stroke="CurrentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.0013 9.66797C15.8615 11.9148 14.668 14.8986 14.668 18.0013C14.668 21.104 15.8615 24.0878 18.0013 26.3346C20.1411 24.0878 21.3346 21.104 21.3346 18.0013C21.3346 14.8986 20.1411 11.9148 18.0013 9.66797Z" stroke="CurrentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.66797 18H26.3346" stroke="CurrentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
}

export function IconLock(){
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8333 9.16797H4.16667C3.24619 9.16797 2.5 9.91416 2.5 10.8346V16.668C2.5 17.5884 3.24619 18.3346 4.16667 18.3346H15.8333C16.7538 18.3346 17.5 17.5884 17.5 16.668V10.8346C17.5 9.91416 16.7538 9.16797 15.8333 9.16797Z" stroke="CurrentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.83203 9.16797V5.83464C5.83203 4.72957 6.27102 3.66976 7.05242 2.88836C7.83382 2.10696 8.89363 1.66797 9.9987 1.66797C11.1038 1.66797 12.1636 2.10696 12.945 2.88836C13.7264 3.66976 14.1654 4.72957 14.1654 5.83464V9.16797" stroke="CurrentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
}

  export function IconShield(){
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6654 10.835C16.6654 15.0017 13.7487 17.085 10.282 18.2933C10.1005 18.3549 9.90331 18.3519 9.7237 18.285C6.2487 17.085 3.33203 15.0017 3.33203 10.835V5.00168C3.33203 4.78066 3.41983 4.5687 3.57611 4.41242C3.73239 4.25614 3.94435 4.16834 4.16536 4.16834C5.83203 4.16834 7.91536 3.16834 9.36536 1.90168C9.54191 1.75084 9.76649 1.66797 9.9987 1.66797C10.2309 1.66797 10.4555 1.75084 10.632 1.90168C12.0904 3.17668 14.1654 4.16834 15.832 4.16834C16.053 4.16834 16.265 4.25614 16.4213 4.41242C16.5776 4.5687 16.6654 4.78066 16.6654 5.00168V10.835Z" stroke="CurrentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function XIcon(){
  return (
   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_2359_19013)">
      <path d="M7.9987 14.6654C11.6806 14.6654 14.6654 11.6806 14.6654 7.9987C14.6654 4.3168 11.6806 1.33203 7.9987 1.33203C4.3168 1.33203 1.33203 4.3168 1.33203 7.9987C1.33203 11.6806 4.3168 14.6654 7.9987 14.6654Z" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 6L6 10" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 6L10 10" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip0_2359_19013">
        <rect width="16" height="16" fill="CurrentColor"/>
      </clipPath>
    </defs>
  </svg>
  );
}

export function CheckCircleIcon(){
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2359_19008)">
        <path d="M14.535 6.66764C14.8395 8.16183 14.6225 9.71525 13.9203 11.0688C13.218 12.4224 12.073 13.4943 10.6761 14.1058C9.27913 14.7174 7.71479 14.8315 6.24391 14.4292C4.77302 14.0269 3.4845 13.1326 2.59323 11.8952C1.70195 10.6579 1.26179 9.15246 1.34615 7.62989C1.43051 6.10733 2.0343 4.6597 3.05681 3.52842C4.07932 2.39714 5.45876 1.65059 6.96509 1.41327C8.47141 1.17595 10.0136 1.46221 11.3344 2.2243" stroke="CurrentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 7.33464L8 9.33464L14.6667 2.66797" stroke="CurrentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_2359_19008">
          <rect width="16" height="16" fill="CurrentColor"/>
        </clipPath>
      </defs>
    </svg>

  );
}