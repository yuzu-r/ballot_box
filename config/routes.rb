Rails.application.routes.draw do
  devise_for :users
  resources :polls
  resources :candidates
  resource :dashboard, only: [:show]
  root 'polls#index'
  patch 'polls/:id/vote', to: 'polls#vote'
  patch 'polls/:id/add', to: 'polls#add_choice'
  get 'users/polls', to: 'polls#owner_index'
  get 'test/:poll_id', to: 'candidates#test'
  get 'poll_results/:poll_id', to: 'candidates#poll_results'
end
