import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-black py-20 sm:py-28"
    >
      <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Join the future of social cannabis consumption.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            It takes 40 seconds to sign up. Click “Enter the Experience” and
            create an account today. Must be 21+ to access room. Verification
            required.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href="https://app.greenhousesocial.app/"
              variant="outline"
            >
              <img src="/icon.png" className="h-6 w-6 flex-none" alt="" />
              <span className="ml-2.5 text-white">Enter the Experience</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
