import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Box from '@material-ui/core/Box'

import { IPokemonDetail } from '../../types'

const PokemonDetailCom: React.FC<IPokemonDetail> = (props) => {
  const pokemonDetail = props
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }
  return (
    <>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={6}>
          <img
            src={pokemonDetail.sprites.back_default}
            alt={pokemonDetail.name}
          />
        </Grid>
        <Grid container item xs={6} alignContent='center'>
          <Typography>
            <b>Name :</b> <p data-testid='pokemon-name'>{pokemonDetail.name}</p>
          </Typography>
        </Grid>
      </Grid>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Abilities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box component='div'>
            {pokemonDetail.abilities.map((item) => (
              <Box m={1} key={item.ability.name}>
                <b>ability :</b>
                {item.ability.name}, <b>Url :</b>{' '}
                <a
                  href={item.ability.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {item.ability.url}
                </a>
                <Typography>
                  <b>Is Hidden : </b>
                  {String(item.is_hidden)}
                </Typography>
                <Typography>
                  <b>slot :</b> {item.slot}
                </Typography>
              </Box>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {pokemonDetail.types.map((item) => (
            <Box width={1} key={item.slot}>
              <Typography>
                <b>slot :</b>
                {item.slot}
              </Typography>
              <Typography>
                <b>Name :</b>
                {item.type.name}, <b>Url :</b>
                <a href={item.type.url} target='_blank' rel='noreferrer'>
                  {item.type.url}
                </a>
              </Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Order Number</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box width={1}>
            <Typography>{pokemonDetail.order}</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Stats</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            {pokemonDetail.stats.map((item) => (
              <Box key={item.stat.name} m={2}>
                <Typography>
                  <b>Base Stat : </b> {item.base_stat}
                </Typography>
                <Typography>
                  <b>Effort : </b> {item.effort}
                </Typography>
                <Typography>
                  <b>Name :</b> {item.stat.name}, <b>Url :</b>
                  <a
                    href={item.stat.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {item.stat.url}
                  </a>
                </Typography>
              </Box>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Possible Evolutions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{pokemonDetail.species.name}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Moves</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            {pokemonDetail.moves.map((item) => (
              <Box key={item.move.name} m={2}>
                <Typography>
                  <b>Move Name :</b> {item.move.name}, Move Url:{' '}
                  <a
                    href={item.move.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {item.move.url}
                  </a>
                </Typography>
                <Typography>version_group_details</Typography>
                {/* {item.version_group_details.map((subitem) => (
                  <Box m={1} key={subitem.move_learn_method.name}>
                    <Typography>
                      <b>Level Learned At :</b> {}
                    </Typography>
                    <Typography>
                      <b>Move Learn Method :</b>{' '}
                      {subitem.move_learn_method.name}, <b>Url:</b>
                      <a href={subitem.move_learn_method.url} target='_blank'>
                        {subitem.move_learn_method.url}
                      </a>
                    </Typography>
                    <Typography>
                      <b>Version Group Name :</b> {subitem.version_group.name},
                      <b>Version Group Url :</b>{' '}
                      <a href={subitem.version_group.url} target='_blank'>
                        {subitem.version_group.url}
                      </a>
                    </Typography>
                  </Box>
                ))} */}
              </Box>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  )
}
export default PokemonDetailCom
