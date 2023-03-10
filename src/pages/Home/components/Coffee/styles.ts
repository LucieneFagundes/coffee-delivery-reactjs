import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 32px;
  row-gap: 40px;

  margin-bottom: 20px;
`

export const CoffeeCard = styled.div`
  width: 16rem;
  height: 19.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 1.25rem;

  background-color: ${(props) => props.theme['base-card']};
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
`

export const CoffeeImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;

  margin-top: -40px;
`

export const Tag = styled.div`
  display: flex;
  gap: 0.25rem;

  p {
    font-size: 0.675rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 4px 8px;
    border-radius: 100px;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }
`
export const CoffeeName = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: capitalize;
`

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
`

export const ControlBuy = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`

export const Price = styled.p`
  font-size: 0.875rem;
  align-items: center;

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    margin-left: 4px;
  }
`
export const BoxInput = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AmountCoffee = styled.input`
  width: 4.5rem;
  border: none;
  border-radius: 6px;
  text-align: center;
  color: ${(props) => props.theme['base-title']};
  background-color: ${(props) => props.theme['base-button']};
`

export const Button = styled.button`
  color: ${(props) => props.theme['base-button']};
  background-color: ${(props) => props.theme['purple-dark']};
  padding: 0 0.5rem;
  border: none;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme['purple']};
  }
`
