import {
  HelpCircle,
  Home,
  Linkedin,
  ListTodo,
  LucideProps,
  MessageCircleHeartIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="500"
      height="500"
      viewBox="0 0 375 375"
      className={cn("fill-current", props.className)}>
      <defs>
        <clipPath id="80f217f0db">
          <path
            d="M 108 39 L 250.976562 39 L 250.976562 249 L 108 249 Z M 108 39 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="4a5d0261fa">
          <path
            d="M 209 114 L 250.976562 114 L 250.976562 174 L 209 174 Z M 209 114 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="383fa64190">
          <path
            d="M 124.65625 126 L 267.882812 126 L 267.882812 336 L 124.65625 336 Z M 124.65625 126 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="36b6a49530">
          <path
            d="M 124.65625 201 L 167 201 L 167 261 L 124.65625 261 Z M 124.65625 201 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#80f217f0db)">
        <path
          d="M 251.15625 45.464844 L 251.15625 68.957031 C 251.15625 70.851562 250.300781 72.554688 248.882812 73.691406 L 163.917969 139.238281 C 160.886719 141.605469 160.886719 146.339844 163.917969 148.710938 L 248.882812 214.160156 C 250.300781 215.296875 251.15625 217.003906 251.15625 218.894531 L 251.15625 242.386719 C 251.15625 247.21875 245.753906 250.058594 241.871094 247.121094 L 110.875 148.613281 C 107.75 146.246094 107.75 141.414062 110.875 139.046875 L 241.871094 40.632812 C 245.753906 37.792969 251.15625 40.539062 251.15625 45.464844 Z M 251.15625 45.464844 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#4a5d0261fa)">
        <path
          d="M 251.15625 120.292969 L 251.15625 167.558594 C 251.15625 172.671875 244.902344 175.421875 240.832031 172.105469 L 211.65625 148.519531 C 208.71875 146.152344 208.71875 141.792969 211.65625 139.332031 L 240.832031 115.746094 C 244.902344 112.433594 251.15625 115.179688 251.15625 120.292969 Z M 251.15625 120.292969 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#383fa64190)">
        <path
          d="M 124.65625 132.613281 L 124.65625 156.101562 C 124.65625 157.996094 125.507812 159.699219 126.929688 160.835938 L 211.890625 226.382812 C 214.921875 228.75 214.921875 233.488281 211.890625 235.855469 L 126.929688 301.304688 C 125.507812 302.441406 124.65625 304.148438 124.65625 306.042969 L 124.65625 329.53125 C 124.65625 334.363281 130.054688 337.207031 133.9375 334.269531 L 264.933594 235.761719 C 268.0625 233.394531 268.0625 228.5625 264.933594 226.195312 L 133.9375 127.78125 C 130.054688 124.9375 124.65625 127.6875 124.65625 132.613281 Z M 124.65625 132.613281 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
      <g clipPath="url(#36b6a49530)">
        <path
          d="M 124.65625 207.441406 L 124.65625 254.703125 C 124.65625 259.820312 130.90625 262.566406 134.980469 259.25 L 164.152344 235.667969 C 167.089844 233.296875 167.089844 228.941406 164.152344 226.476562 L 134.980469 202.894531 C 130.90625 199.578125 124.65625 202.324219 124.65625 207.441406 Z M 124.65625 207.441406 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </g>
    </svg>
  ),
  home: Home,
  about: HelpCircle,
  projects: ListTodo,
  contact: MessageCircleHeartIcon,
  linkedin: Linkedin,
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
}
