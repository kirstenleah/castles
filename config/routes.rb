Rails.application.routes.draw do
  resources :purchases, only: %i[index show create]
  resources :castles, only: %i[index show update]
  resources :users, only: %i[create destroy]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
